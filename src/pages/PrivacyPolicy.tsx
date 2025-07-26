import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, FileText, Phone, Mail, MessageCircle } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="min-h-screen py-12 bg-gradient-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">
              Privacy Policy & <span className="bg-gradient-primary bg-clip-text text-transparent">Terms</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy and trust are important to us. Learn how DOMINOVA collects, 
              uses, and protects your information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 2024
            </p>
          </div>

          <div className="space-y-8">
            {/* Privacy Policy */}
            <Card className="bg-card border-border shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  Privacy Policy
                </CardTitle>
                <CardDescription>
                  How we collect, use, and protect your personal information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">1. Information We Collect</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p><strong>Personal Information:</strong> Name, email address, phone number, college/institution name, LinkedIn profile (for trainers).</p>
                    <p><strong>Application Data:</strong> Internship domain preferences, introduction/bio, professional experience details.</p>
                    <p><strong>Usage Information:</strong> How you interact with our website, IP address, browser type, pages visited.</p>
                    <p><strong>Communication Data:</strong> Messages sent through contact forms, email correspondence.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">2. How We Use Your Information</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>• Process and evaluate internship and trainer applications</p>
                    <p>• Communicate about program updates, schedules, and opportunities</p>
                    <p>• Provide customer support and respond to inquiries</p>
                    <p>• Improve our services and website functionality</p>
                    <p>• Send relevant educational content and program announcements</p>
                    <p>• Comply with legal obligations and protect our rights</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">3. Information Sharing</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>We do not sell, trade, or rent your personal information to third parties. We may share information only in these circumstances:</p>
                    <p>• With trusted service providers who assist in our operations (under strict confidentiality agreements)</p>
                    <p>• When required by law or to protect our legal rights</p>
                    <p>• With potential employers for placement assistance (only with your explicit consent)</p>
                    <p>• In case of business transfer or merger (you will be notified beforehand)</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">4. Data Security</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:</p>
                    <p>• Encryption of sensitive data in transit and at rest</p>
                    <p>• Regular security assessments and updates</p>
                    <p>• Limited access to personal information on a need-to-know basis</p>
                    <p>• Secure hosting with reputable service providers</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">5. Your Rights</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>You have the right to:</p>
                    <p>• Access and review your personal information</p>
                    <p>• Request correction of inaccurate information</p>
                    <p>• Request deletion of your personal information</p>
                    <p>• Opt-out of marketing communications</p>
                    <p>• File a complaint with relevant data protection authorities</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Terms of Service */}
            <Card className="bg-card border-border shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Terms of Service
                </CardTitle>
                <CardDescription>
                  Terms and conditions for using DOMINOVA services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">1. Acceptance of Terms</h3>
                  <p className="text-muted-foreground">
                    By accessing and using DOMINOVA's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">2. Company Information</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>DOMINOVA is a Udyam-registered startup based in Chennai, Tamil Nadu, India.</p>
                    <p>Contact: dominovachennai@gmail.com | +91 9025092699</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">3. Services</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>DOMINOVA provides:</p>
                    <p>• Professional internship programs in various technology domains</p>
                    <p>• Training and mentorship services</p>
                    <p>• Career guidance and placement assistance</p>
                    <p>• Educational content and resources</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">4. User Responsibilities</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>Users agree to:</p>
                    <p>• Provide accurate and complete information during registration</p>
                    <p>• Maintain confidentiality of account credentials</p>
                    <p>• Use services only for lawful purposes</p>
                    <p>• Respect intellectual property rights</p>
                    <p>• Not engage in any activity that disrupts or interferes with our services</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">5. Intellectual Property</h3>
                  <p className="text-muted-foreground">
                    All content, materials, and resources provided by DOMINOVA are protected by intellectual property laws. Users may access and use these materials solely for their personal learning purposes during their enrollment in our programs.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">6. Limitation of Liability</h3>
                  <p className="text-muted-foreground">
                    DOMINOVA strives to provide high-quality educational services. However, we do not guarantee specific outcomes such as job placement or salary improvements. Our liability is limited to the fees paid for our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">7. Modification of Terms</h3>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these terms at any time. Users will be notified of significant changes, and continued use of our services constitutes acceptance of modified terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">8. Governing Law</h3>
                  <p className="text-muted-foreground">
                    These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts in Chennai, Tamil Nadu.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="bg-secondary border-border">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Questions About Our <span className="bg-gradient-primary bg-clip-text text-transparent">Policies</span>?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  If you have any questions about our Privacy Policy or Terms of Service, 
                  please don't hesitate to contact us. We're here to help!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="premium" size="lg" asChild>
                    <Link to="/contact">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact Us
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="mailto:dominovachennai@gmail.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Support
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;