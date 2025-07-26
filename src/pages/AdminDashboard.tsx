import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { Shield, Users, UserCheck, Search, Filter, Download, Eye, CheckCircle, Clock, XCircle } from "lucide-react";

const AdminDashboard = () => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Dummy data - replace with actual backend data
  const internApplications = [
    {
      id: 1,
      fullName: "Priya Sharma",
      collegeName: "Anna University",
      email: "priya.sharma@email.com",
      phone: "+91 9876543210",
      domains: ["UI/UX Design", "Web Development (Frontend)"],
      introduction: "Passionate about creating user-friendly interfaces...",
      status: "pending",
      submittedAt: "2024-01-15"
    },
    {
      id: 2,
      fullName: "Rahul Kumar",
      collegeName: "IIT Chennai",
      email: "rahul.kumar@email.com",
      phone: "+91 9876543211",
      domains: ["Data Analytics", "Python"],
      introduction: "Data enthusiast with strong analytical skills...",
      status: "selected",
      submittedAt: "2024-01-14"
    },
    {
      id: 3,
      fullName: "Sneha Patel",
      collegeName: "VIT Chennai",
      email: "sneha.patel@email.com",
      phone: "+91 9876543212",
      domains: ["Manual Testing", "Java"],
      introduction: "Quality assurance focused with attention to detail...",
      status: "hold",
      submittedAt: "2024-01-13"
    }
  ];

  const trainerApplications = [
    {
      id: 1,
      fullName: "Dr. Amit Verma",
      email: "amit.verma@email.com",
      phone: "+91 9876543220",
      experience: "8 years",
      linkedinProfile: "https://linkedin.com/in/amitverma",
      expertiseDomains: ["Data Analytics", "Machine Learning", "Python"],
      bio: "Senior Data Scientist with extensive industry experience...",
      status: "selected",
      submittedAt: "2024-01-12"
    },
    {
      id: 2,
      fullName: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+91 9876543221",
      experience: "6 years",
      linkedinProfile: "https://linkedin.com/in/sarahjohnson",
      expertiseDomains: ["UI/UX Design", "Web Development (Frontend)"],
      bio: "Creative designer with strong technical background...",
      status: "pending",
      submittedAt: "2024-01-11"
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - replace with proper authentication
    if (password === "dominova2024") {
      setIsLoggedIn(true);
      toast({
        title: "Login Successful",
        description: "Welcome to DOMINOVA Admin Dashboard"
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid password. Please try again.",
        variant: "destructive"
      });
    }
  };

  const updateStatus = (type: 'intern' | 'trainer', id: number, newStatus: string) => {
    // TODO: Update in backend
    toast({
      title: "Status Updated",
      description: `Application status updated to ${newStatus}`
    });
  };

  const exportData = (type: 'intern' | 'trainer') => {
    // TODO: Implement CSV export
    toast({
      title: "Export Started",
      description: `${type} data export will be downloaded shortly`
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'selected': return 'bg-green-500';
      case 'hold': return 'bg-yellow-500';
      case 'rejected': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'selected': return <CheckCircle className="h-4 w-4" />;
      case 'hold': return <Clock className="h-4 w-4" />;
      case 'rejected': return <XCircle className="h-4 w-4" />;
      default: return <Eye className="h-4 w-4" />;
    }
  };

  if (!isLoggedIn) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gradient-dark">
          <Card className="w-full max-w-md bg-card border-border shadow-elegant">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-primary" />
              </div>
              <CardTitle>DOMINOVA Admin Access</CardTitle>
              <CardDescription>
                Enter your admin password to access the dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="password">Admin Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="bg-background border-border"
                  />
                </div>
                <Button type="submit" variant="premium" className="w-full">
                  Access Dashboard
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen py-8 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Admin <span className="bg-gradient-primary bg-clip-text text-transparent">Dashboard</span>
              </h1>
              <p className="text-muted-foreground">Manage internship and trainer applications</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Interns</p>
                    <p className="text-2xl font-bold">{internApplications.length}</p>
                  </div>
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Trainers</p>
                    <p className="text-2xl font-bold">{trainerApplications.length}</p>
                  </div>
                  <UserCheck className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Selected</p>
                    <p className="text-2xl font-bold text-green-500">
                      {[...internApplications, ...trainerApplications].filter(app => app.status === 'selected').length}
                    </p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Pending</p>
                    <p className="text-2xl font-bold text-blue-500">
                      {[...internApplications, ...trainerApplications].filter(app => app.status === 'pending').length}
                    </p>
                  </div>
                  <Clock className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Applications Management */}
          <Card className="bg-card border-border shadow-elegant">
            <CardHeader>
              <CardTitle>Applications Management</CardTitle>
              <CardDescription>
                Review and manage all internship and trainer applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="interns" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="interns">Intern Applications</TabsTrigger>
                  <TabsTrigger value="trainers">Trainer Applications</TabsTrigger>
                </TabsList>
                
                <TabsContent value="interns" className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="flex-1">
                      <Input
                        placeholder="Search applications..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-background border-border"
                      />
                    </div>
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-full sm:w-48 bg-background border-border">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="selected">Selected</SelectItem>
                        <SelectItem value="hold">Hold</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" onClick={() => exportData('intern')}>
                      <Download className="h-4 w-4 mr-2" />
                      Export CSV
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {internApplications.map((application) => (
                      <Card key={application.id} className="bg-secondary border-border">
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="font-semibold text-lg">{application.fullName}</h3>
                                <Badge className={`${getStatusColor(application.status)} text-white`}>
                                  {getStatusIcon(application.status)}
                                  {application.status}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">{application.collegeName}</p>
                              <p className="text-sm text-muted-foreground mb-2">{application.email} • {application.phone}</p>
                              <div className="flex flex-wrap gap-2 mb-2">
                                {application.domains.map((domain) => (
                                  <Badge key={domain} variant="outline">{domain}</Badge>
                                ))}
                              </div>
                              <p className="text-sm text-muted-foreground">Submitted: {application.submittedAt}</p>
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => updateStatus('intern', application.id, 'selected')}
                              >
                                Select
                              </Button>
                              <Button 
                                size="sm" 
                                variant="secondary"
                                onClick={() => updateStatus('intern', application.id, 'hold')}
                              >
                                Hold
                              </Button>
                              <Button 
                                size="sm" 
                                variant="destructive"
                                onClick={() => updateStatus('intern', application.id, 'rejected')}
                              >
                                Reject
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="trainers" className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="flex-1">
                      <Input
                        placeholder="Search trainer applications..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-background border-border"
                      />
                    </div>
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-full sm:w-48 bg-background border-border">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="selected">Selected</SelectItem>
                        <SelectItem value="hold">Hold</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" onClick={() => exportData('trainer')}>
                      <Download className="h-4 w-4 mr-2" />
                      Export CSV
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {trainerApplications.map((application) => (
                      <Card key={application.id} className="bg-secondary border-border">
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="font-semibold text-lg">{application.fullName}</h3>
                                <Badge className={`${getStatusColor(application.status)} text-white`}>
                                  {getStatusIcon(application.status)}
                                  {application.status}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">{application.email} • {application.phone}</p>
                              <p className="text-sm text-muted-foreground mb-2">Experience: {application.experience}</p>
                              <div className="flex flex-wrap gap-2 mb-2">
                                {application.expertiseDomains.map((domain) => (
                                  <Badge key={domain} variant="outline">{domain}</Badge>
                                ))}
                              </div>
                              <p className="text-sm text-muted-foreground">Submitted: {application.submittedAt}</p>
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => updateStatus('trainer', application.id, 'selected')}
                              >
                                Select
                              </Button>
                              <Button 
                                size="sm" 
                                variant="secondary"
                                onClick={() => updateStatus('trainer', application.id, 'hold')}
                              >
                                Hold
                              </Button>
                              <Button 
                                size="sm" 
                                variant="destructive"
                                onClick={() => updateStatus('trainer', application.id, 'rejected')}
                              >
                                Reject
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;