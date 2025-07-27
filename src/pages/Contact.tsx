import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    // TODO: Replace with actual backend call
    console.log("Contact form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <div className="min-h-screen py-12 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Contact <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch with DOMINOVA. We're here to help you with any questions about our internship programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card border-border shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                      placeholder="Enter your full name"
                      className="bg-background border-border"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                      placeholder="your.email@example.com"
                      className="bg-background border-border"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                      placeholder="Tell us how we can help you..."
                      className="bg-background border-border min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" variant="premium" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-muted-foreground">dominovachennai@gmail.com</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          We respond to emails within 24 hours
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="text-muted-foreground">+91 9025092699</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Available Mon-Fri, 9:00 AM - 6:00 PM IST
                        </p>
                      </div>
                    </div>
                    
                     <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary mt-1 animate-bounce" />
                      <div>
                        <h4 className="font-semibold mb-1">Office Location</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          K 207, Casagrand Miro,<br />
                          Vandalur-Walajabad Road,<br />
                          Manivakkam, Tamil Nadu – 600048, India
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Udyam Registered Startup
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Business Hours</h4>
                        <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-0">
                  <div className="h-96 bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0234567890123!2d80.1234567!3d12.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzE1LjYiTiA4MMKwMDcnMjQuNSJF!5e0!3m2!1sen!2sin!4v1645123456789!5m2!1sen!2sin&q=K+207,+Casagrand+Miro,+Vandalur-Walajabad+Road,+Manivakkam,+Tamil+Nadu+600048,+India"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="DOMINOVA Office Location - K 207, Casagrand Miro, Manivakkam"
                    />
                  </div>
                  <div className="p-4 bg-card">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">DOMINOVA Office</p>
                        <p className="text-sm text-muted-foreground">
                          K 207, Casagrand Miro, Vandalur-Walajabad Road, Manivakkam, TN 600048
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;