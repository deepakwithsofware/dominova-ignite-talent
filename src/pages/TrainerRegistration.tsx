import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { UserCheck, Briefcase, Mail, Phone, LinkedinIcon, Award } from "lucide-react";

const TrainerRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    linkedinProfile: "",
    expertiseDomains: [] as string[],
    bio: ""
  });

  const expertiseDomains = [
    "UI/UX Design",
    "Web Development (Frontend)",
    "Web Development (Backend)", 
    "Web Development (Full Stack)",
    "Android App Development",
    "iOS App Development",
    "React Native Development",
    "Flutter Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Data Analytics",
    "Big Data Analytics",
    "Business Intelligence",
    "Cybersecurity",
    "Ethical Hacking",
    "Cloud Computing (AWS)",
    "Cloud Computing (Azure)",
    "Cloud Computing (GCP)",
    "DevOps",
    "Internet of Things (IoT)",
    "Blockchain Development",
    "Smart Contract Development",
    "Game Development (Unity)",
    "Game Development (Unreal)",
    "AR/VR Development",
    "Software Testing (Manual)",
    "Software Testing (Automation)",
    "Selenium Testing",
    "API Testing",
    "Performance Testing",
    "Java Programming",
    "Python Programming",
    "JavaScript Programming",
    "C++ Programming",
    "C# Programming",
    "Node.js Development",
    "PHP Development",
    "Ruby on Rails",
    "SQL/Database Management",
    "MongoDB/NoSQL",
    "PostgreSQL",
    "MySQL",
    "Embedded Systems",
    "Robotics",
    "Microcontrollers (Arduino/Raspberry Pi)",
    "Digital Marketing",
    "SEO/SEM",
    "Social Media Marketing",
    "Content Marketing",
    "Email Marketing",
    "Business Analysis",
    "Product Management",
    "Project Management",
    "Agile/Scrum",
    "Graphic Design",
    "Adobe Creative Suite",
    "Video Editing",
    "Motion Graphics",
    "3D Modeling & Animation",
    "CRM Platforms (Salesforce)",
    "CRM Platforms (Zoho)",
    "ERP Systems",
    "Microsoft Office Suite",
    "Power BI",
    "Tableau",
    "Excel Advanced",
    "Accounting Software",
    "Financial Analysis",
    "Supply Chain Management",
    "HR Management",
    "Quality Assurance",
    "Six Sigma",
    "Lean Manufacturing"
  ];

  const handleDomainChange = (domain: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      expertiseDomains: checked 
        ? [...prev.expertiseDomains, domain]
        : prev.expertiseDomains.filter(d => d !== domain)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.experience) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (formData.expertiseDomains.length === 0) {
      toast({
        title: "Error", 
        description: "Please select at least one expertise domain.",
        variant: "destructive"
      });
      return;
    }

    // TODO: Replace with actual Supabase backend call
    console.log("Trainer registration submitted:", formData);
    
    toast({
      title: "Registration Submitted!",
      description: "Thank you for your interest in training with DOMINOVA. We'll review your application and contact you soon.",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      linkedinProfile: "",
      expertiseDomains: [],
      bio: ""
    });
  };

  return (
    <Layout>
      <div className="min-h-screen py-12 bg-gradient-dark">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Trainer <span className="bg-gradient-primary bg-clip-text text-transparent">Registration</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Share your expertise and mentor the next generation with DOMINOVA
            </p>
          </div>

          <Card className="bg-card border-border shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-6 w-6 text-primary" />
                Professional Trainer Application
              </CardTitle>
              <CardDescription>
                Join our team of expert trainers and help shape future professionals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <UserCheck className="h-5 w-5 text-primary" />
                    Personal Information
                  </h3>
                  
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

                {/* Professional Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    Professional Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="experience">Years of Experience *</Label>
                      <Input
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => setFormData(prev => ({...prev, experience: e.target.value}))}
                        placeholder="e.g., 5 years"
                        className="bg-background border-border"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="linkedinProfile">LinkedIn Profile</Label>
                      <Input
                        id="linkedinProfile"
                        value={formData.linkedinProfile}
                        onChange={(e) => setFormData(prev => ({...prev, linkedinProfile: e.target.value}))}
                        placeholder="https://linkedin.com/in/yourprofile"
                        className="bg-background border-border"
                      />
                    </div>
                  </div>
                </div>

                {/* Expertise Domains */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Expertise Domain *
                  </h3>
                  <p className="text-sm text-muted-foreground">Select the areas where you have expertise:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto border border-border rounded-lg p-4 bg-background/50">
                    {expertiseDomains.map((domain) => (
                      <div key={domain} className="flex items-center space-x-2">
                        <Checkbox
                          id={domain}
                          checked={formData.expertiseDomains.includes(domain)}
                          onCheckedChange={(checked) => handleDomainChange(domain, checked as boolean)}
                        />
                        <Label htmlFor={domain} className="text-sm cursor-pointer">
                          {domain}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Short Bio / Introduction</h3>
                  <div>
                    <Label htmlFor="bio">Tell us about your professional journey</Label>
                    <Textarea
                      id="bio"
                      value={formData.bio}
                      onChange={(e) => setFormData(prev => ({...prev, bio: e.target.value}))}
                      placeholder="Share your professional background, key achievements, and what motivates you to train others..."
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

export default TrainerRegistration;