import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { User, GraduationCap, Mail, Phone, MessageCircle } from "lucide-react";

const InternshipRegistration = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: "",
    collegeName: "",
    email: "",
    phone: "",
    domains: [] as string[],
    introduction: ""
  });

  // Auto-fill domain from URL parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const domainParam = urlParams.get('domain');
    if (domainParam && internshipDomains.includes(domainParam)) {
      setFormData(prev => ({
        ...prev,
        domains: [domainParam]
      }));
    }
  }, [location.search]);

  const internshipDomains = [
    "UI/UX Design",
    "Web Development (Frontend)",
    "Data Analytics", 
    "Manual Testing",
    "Java",
    "Python",
    "SQL"
  ];

  const handleDomainChange = (domain: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      domains: checked 
        ? [...prev.domains, domain]
        : prev.domains.filter(d => d !== domain)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.collegeName || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (formData.domains.length === 0) {
      toast({
        title: "Error", 
        description: "Please select at least one internship domain.",
        variant: "destructive"
      });
      return;
    }

    // TODO: Replace with actual Supabase backend call
    console.log("Form submitted:", formData);
    
    toast({
      title: "Application Submitted!",
      description: "Thank you for applying. We'll review your application and get back to you soon.",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      collegeName: "",
      email: "",
      phone: "",
      domains: [],
      introduction: ""
    });
  };

  return (
    <Layout>
      <div className="min-h-screen py-12 bg-gradient-dark">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Internship <span className="bg-gradient-primary bg-clip-text text-transparent">Registration</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Join DOMINOVA's professional internship program and kickstart your career
            </p>
          </div>

          <Card className="bg-card border-border shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Student Application Form
              </CardTitle>
              <CardDescription>
                Fill out the form below to apply for our internship program
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({...prev, fullName: e.target.value}))}
                        placeholder="Enter your full name"
                        className="bg-background border-border"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="collegeName">College Name *</Label>
                      <Input
                        id="collegeName"
                        value={formData.collegeName}
                        onChange={(e) => setFormData(prev => ({...prev, collegeName: e.target.value}))}
                        placeholder="Enter your college name"
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email ID *</Label>
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
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                        placeholder="+91 9876543210"
                        className="bg-background border-border"
                      />
                    </div>
                  </div>
                </div>

                {/* Internship Domains */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    Choose Internship Domains *
                  </h3>
                  <p className="text-sm text-muted-foreground">Select one or more domains you're interested in:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {internshipDomains.map((domain) => (
                      <div key={domain} className="flex items-center space-x-2">
                        <Checkbox
                          id={domain}
                          checked={formData.domains.includes(domain)}
                          onCheckedChange={(checked) => handleDomainChange(domain, checked as boolean)}
                        />
                        <Label htmlFor={domain} className="text-sm cursor-pointer">
                          {domain}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Introduction */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Short Introduction</h3>
                  <div>
                    <Label htmlFor="introduction">Tell us about yourself</Label>
                    <Textarea
                      id="introduction"
                      value={formData.introduction}
                      onChange={(e) => setFormData(prev => ({...prev, introduction: e.target.value}))}
                      placeholder="Share your interests, goals, and why you want to join DOMINOVA's internship program..."
                      className="bg-background border-border min-h-[120px]"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="premium" 
                  size="lg" 
                  className="w-full"
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default InternshipRegistration;