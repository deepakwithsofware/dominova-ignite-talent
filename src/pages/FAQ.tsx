import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, Users, GraduationCap, MessageCircle } from "lucide-react";

const FAQ = () => {
  const internFAQs = [
    {
      question: "Who can apply for DOMINOVA internship programs?",
      answer: "Students from any college or university, recent graduates, and working professionals looking to upskill can apply for our internship programs. We welcome applicants from all backgrounds and experience levels."
    },
    {
      question: "What is the duration of internship programs?",
      answer: "Our internship programs vary in duration based on the domain: UI/UX Design (8 weeks), Web Development (10 weeks), Data Analytics (12 weeks), Manual Testing (6 weeks), Java (10 weeks), Python (8 weeks), and SQL (6 weeks)."
    },
    {
      question: "Are the internships paid or unpaid?",
      answer: "DOMINOVA offers both paid and unpaid internship opportunities. The type depends on the specific program and your performance during the initial assessment phase. Outstanding performers may be offered stipends."
    },
    {
      question: "Do I need prior experience to apply?",
      answer: "No prior experience is required for most of our programs. We offer courses for beginners to advanced levels. Our expert trainers will guide you from basics to advanced concepts based on your chosen track."
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer: "Yes, all participants who successfully complete their internship program will receive an industry-recognized certificate from DOMINOVA, which you can add to your professional portfolio and resume."
    },
    {
      question: "Can I choose multiple domains?",
      answer: "Yes, you can select multiple domains during registration. However, we recommend focusing on 1-2 related domains to ensure quality learning and better skill development."
    },
    {
      question: "What is the application process?",
      answer: "Simply fill out our online application form with your details, select your preferred domains, and submit. Our team will review your application and contact you within 2-3 business days with next steps."
    },
    {
      question: "Is there any fee for the internship programs?",
      answer: "Our basic internship programs are free of cost. However, premium tracks with additional mentorship, advanced projects, and placement assistance may have nominal fees."
    }
  ];

  const trainerFAQs = [
    {
      question: "What qualifications do I need to become a trainer?",
      answer: "We look for professionals with at least 3+ years of industry experience in their domain, strong communication skills, and a passion for teaching. Relevant certifications and educational background are preferred but not mandatory."
    },
    {
      question: "Is this a full-time or part-time opportunity?",
      answer: "We offer both full-time and part-time trainer positions. Part-time trainers can conduct weekend or evening sessions based on their availability and our program schedule."
    },
    {
      question: "How much can I earn as a trainer?",
      answer: "Trainer compensation varies based on experience, domain expertise, and engagement level. We offer competitive rates that are discussed during the interview process based on your profile."
    },
    {
      question: "What domains are you currently hiring trainers for?",
      answer: "We're actively seeking trainers for UI/UX Design, Web Development, Data Analytics, Software Testing, Java, Python, SQL, DevOps, Mobile Development, and Machine Learning."
    },
    {
      question: "Do I need to create curriculum from scratch?",
      answer: "No, we provide structured curriculum and training materials. However, trainers are encouraged to add their industry insights, real-world examples, and practical projects to enhance the learning experience."
    },
    {
      question: "What support will I receive as a trainer?",
      answer: "DOMINOVA provides comprehensive support including training materials, technical infrastructure, administrative assistance, and ongoing professional development opportunities."
    }
  ];

  const generalFAQs = [
    {
      question: "Where is DOMINOVA located?",
      answer: "DOMINOVA is based in Chennai, Tamil Nadu, India. We are a Udyam-registered startup. While our physical location is in Chennai, we also offer online programs accessible from anywhere."
    },
    {
      question: "How can I contact DOMINOVA?",
      answer: "You can reach us via email at dominovachennai@gmail.com or call us at +91 9025092699. Our team is available Monday to Friday, 9:00 AM to 6:00 PM IST."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes, we provide placement assistance to high-performing interns. This includes resume building, interview preparation, and connecting with our partner companies for job opportunities."
    },
    {
      question: "Can I switch domains during my internship?",
      answer: "Domain switches are possible in the first two weeks of the program, subject to availability and approval from the academic team. However, we recommend sticking to your chosen domain for optimal learning outcomes."
    },
    {
      question: "What happens if I miss classes?",
      answer: "We understand that life happens! We provide recorded sessions and make-up classes for legitimate absences. However, consistent attendance is important for the best learning experience."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-12 bg-gradient-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">
              Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about DOMINOVA's internship programs, 
              trainer opportunities, and our learning platform.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {/* Intern FAQs */}
            <Card className="bg-card border-border shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  For Students & Interns
                </CardTitle>
                <CardDescription>
                  Everything you need to know about our internship programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-2">
                  {internFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`intern-${index}`} className="border-border">
                      <AccordionTrigger className="text-left hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Trainer FAQs */}
            <Card className="bg-card border-border shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  For Trainers & Professionals
                </CardTitle>
                <CardDescription>
                  Information about becoming a trainer with DOMINOVA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-2">
                  {trainerFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`trainer-${index}`} className="border-border">
                      <AccordionTrigger className="text-left hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* General FAQs */}
            <Card className="bg-card border-border shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-primary" />
                  General Information
                </CardTitle>
                <CardDescription>
                  General questions about DOMINOVA and our services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-2">
                  {generalFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`general-${index}`} className="border-border">
                      <AccordionTrigger className="text-left hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Still Have Questions */}
          <div className="text-center mt-16">
            <Card className="bg-secondary border-border p-8">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Still Have <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help! 
                Reach out to us and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="premium" size="lg" asChild>
                  <Link to="/contact">
                    Contact Support
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:dominovachennai@gmail.com">
                    Email Us Directly
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;