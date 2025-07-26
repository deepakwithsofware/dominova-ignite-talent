import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Users, Award, CheckCircle, BookOpen, Target, Code, Database, Palette, TestTube } from "lucide-react";

const InternshipDetails = () => {
  const internshipPrograms = [
    {
      title: "UI/UX Design",
      icon: Palette,
      duration: "8 weeks",
      level: "Beginner to Intermediate",
      description: "Master the art of user interface and user experience design with industry-standard tools and methodologies.",
      skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping", "Design Systems"],
      benefits: [
        "Hands-on projects with real clients",
        "Portfolio development guidance", 
        "Industry mentor assignment",
        "UI/UX certification"
      ],
      projects: "3 major projects + 1 capstone project"
    },
    {
      title: "Web Development (Frontend)",
      icon: Code,
      duration: "10 weeks",
      level: "Beginner to Advanced",
      description: "Build modern, responsive web applications using cutting-edge frontend technologies and frameworks.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
      benefits: [
        "Live project experience",
        "Code review sessions",
        "Deployment guidance",
        "Frontend Developer certification"
      ],
      projects: "4 projects including an e-commerce application"
    },
    {
      title: "Data Analytics",
      icon: Database,
      duration: "12 weeks", 
      level: "Intermediate",
      description: "Analyze complex datasets and derive actionable insights using statistical methods and visualization tools.",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "SQL", "Power BI"],
      benefits: [
        "Real-world dataset projects",
        "Statistical analysis training",
        "Business intelligence focus",
        "Data Analyst certification"
      ],
      projects: "3 analytics projects + business case study"
    },
    {
      title: "Manual Testing",
      icon: TestTube,
      duration: "6 weeks",
      level: "Beginner",
      description: "Learn comprehensive software testing methodologies to ensure high-quality software delivery.",
      skills: ["Test Planning", "Test Case Design", "Bug Reporting", "JIRA", "Selenium Basics", "API Testing"],
      benefits: [
        "Industry testing tools exposure",
        "Defect lifecycle management",
        "Agile testing methodology",
        "QA Tester certification"
      ],
      projects: "2 testing projects + automation basics"
    },
    {
      title: "Java Programming", 
      icon: Code,
      duration: "10 weeks",
      level: "Beginner to Intermediate",
      description: "Master Java programming from fundamentals to advanced concepts with enterprise-level project experience.",
      skills: ["Core Java", "OOP Concepts", "Spring Framework", "MySQL", "Maven", "Git"],
      benefits: [
        "Enterprise Java projects",
        "Code optimization techniques",
        "Best practices training",
        "Java Developer certification"
      ],
      projects: "3 applications including a web-based system"
    },
    {
      title: "Python Programming",
      icon: Code,
      duration: "8 weeks",
      level: "Beginner to Intermediate", 
      description: "Explore Python's versatility through web development, automation, and data science applications.",
      skills: ["Python Basics", "Django/Flask", "Automation", "Data Structures", "APIs", "Database Integration"],
      benefits: [
        "Multi-domain Python exposure",
        "Automation project experience",
        "Web development with Python",
        "Python Developer certification"
      ],
      projects: "3 diverse projects across different domains"
    },
    {
      title: "SQL & Database Management",
      icon: Database,
      duration: "6 weeks",
      level: "Beginner to Intermediate",
      description: "Master database design, optimization, and management with hands-on experience in real database systems.",
      skills: ["SQL Queries", "Database Design", "MySQL", "PostgreSQL", "Performance Tuning", "Backup & Recovery"],
      benefits: [
        "Real database projects",
        "Query optimization training",
        "Database administration basics",
        "Database Specialist certification"
      ],
      projects: "2 database projects + optimization case study"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-12 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">
              Internship <span className="bg-gradient-primary bg-clip-text text-transparent">Programs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive, industry-focused internship programs designed to bridge the gap between academic learning and professional expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span>Flexible Duration</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-5 w-5 text-primary" />
                <span>Expert Mentorship</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="h-5 w-5 text-primary" />
                <span>Industry Certification</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>Hands-on Projects</span>
              </div>
            </div>
          </div>

          {/* Program Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Industry-Relevant</h3>
                <p className="text-muted-foreground">
                  Curriculum designed with industry leaders to ensure you learn the most in-demand skills
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Mentorship</h3>
                <p className="text-muted-foreground">
                  Learn from experienced professionals who provide personalized guidance throughout your journey
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Certification</h3>
                <p className="text-muted-foreground">
                  Receive industry-recognized certificates that add value to your professional portfolio
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Internship Programs */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Available <span className="bg-gradient-primary bg-clip-text text-transparent">Programs</span>
            </h2>
            
            {internshipPrograms.map((program, index) => (
              <Card key={index} className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <program.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="outline">{program.duration}</Badge>
                            <Badge variant="outline">{program.level}</Badge>
                          </div>
                          <p className="text-muted-foreground mb-4">{program.description}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Code className="h-4 w-4 text-primary" />
                            Skills You'll Learn
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {program.skills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                            Projects
                          </h4>
                          <p className="text-muted-foreground">{program.projects}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          Program Benefits
                        </h4>
                        <ul className="space-y-2">
                          {program.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button variant="premium" size="lg" className="w-full" asChild>
                        <Link to="/internship-registration">
                          Apply for {program.title}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="bg-secondary border-border p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Choose your program and take the first step towards a successful career in technology. 
                Our expert mentors are waiting to guide you through your learning journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="premium" size="lg" asChild>
                  <Link to="/internship-registration">
                    Apply Now
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    Have Questions?
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InternshipDetails;