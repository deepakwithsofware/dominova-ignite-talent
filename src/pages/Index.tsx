import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, Target, Star, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-dark"></div>
        <div className="absolute inset-0 bg-gradient-gold-radial opacity-30"></div>
        
        {/* Animated Hexagons */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-primary/20 transform rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-primary/30 transform rotate-45 animate-float delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-primary/10 transform rotate-45 animate-float delay-2000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/9b521aef-42fc-412b-9a1e-bf03c5d13a2d.png" 
              alt="DOMINOVA Logo" 
              className="h-32 w-auto animate-fade-in"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              DOMINOVA
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up delay-300">
            Empowering the next generation through professional internship programs. 
            Bridge the gap between education and industry with DOMINOVA.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-500">
            <Button variant="premium" size="lg" asChild>
              <Link to="/internship-registration">
                Apply for Internship <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <Link to="/trainer-registration">
                Become a Trainer
              </Link>
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-muted-foreground animate-fade-in-up delay-700">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span>dominova.office@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>+91 8754325192</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">DOMINOVA</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A Udyam-registered startup dedicated to revolutionizing the internship experience 
              through innovative programs that connect talented students with industry experts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="bg-card border-border hover:shadow-gold transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To bridge the gap between academic learning and industry requirements by providing 
                  comprehensive, hands-on internship experiences.
                </p>
              </CardContent>
            </Card>
            
            {/* Values */}
            <Card className="bg-card border-border hover:shadow-gold transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                <p className="text-muted-foreground">
                  Excellence, Innovation, Integrity, and Empowerment drive everything we do. 
                  We believe in nurturing talent and fostering growth.
                </p>
              </CardContent>
            </Card>
            
            {/* Vision */}
            <Card className="bg-card border-border hover:shadow-gold transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become the leading platform for professional development, creating a 
                  community where students and trainers thrive together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">DOMINOVA</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover what makes our internship programs exceptional and how we're 
              transforming careers one student at a time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Industry-Relevant Training",
                description: "Cutting-edge curriculum designed with industry leaders to ensure practical skills development.",
                icon: CheckCircle
              },
              {
                title: "Expert Mentorship",
                description: "Learn from experienced professionals who are passionate about sharing their knowledge.",
                icon: Users
              },
              {
                title: "Certification Programs",
                description: "Receive recognized certifications that add value to your professional portfolio.",
                icon: Award
              },
              {
                title: "Flexible Learning",
                description: "Adaptable schedules and learning paths that fit your lifestyle and goals.",
                icon: Target
              },
              {
                title: "Career Support",
                description: "Comprehensive career guidance and job placement assistance for our graduates.",
                icon: ArrowRight
              },
              {
                title: "Community Network",
                description: "Join a thriving community of learners, mentors, and industry professionals.",
                icon: Users
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-gold transition-all duration-300 group">
                <CardContent className="p-6">
                  <benefit.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-gold-radial opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with DOMINOVA's 
            comprehensive internship programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="premium" size="lg" asChild>
              <Link to="/internship-registration">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
