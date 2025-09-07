import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin } from "lucide-react";

const Gallery = () => {
  // Sample gallery data - replace with actual images and events
  const galleryItems = [
    {
      id: 1,
      title: "Web Development Workshop",
      description: "Students learning React and modern web technologies",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      category: "Workshop",
      date: "2024-01-15",
      participants: 25
    },
    {
      id: 2,
      title: "UI/UX Design Session",
      description: "Interactive session on user experience design principles",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      category: "Design",
      date: "2024-01-10",
      participants: 20
    },
    {
      id: 3,
      title: "Data Analytics Training",
      description: "Hands-on training with real datasets and visualization tools",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Analytics",
      date: "2024-01-08",
      participants: 18
    },
    {
      id: 4,
      title: "Java Programming Bootcamp",
      description: "Intensive Java programming session with live coding",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop",
      category: "Programming",
      date: "2024-01-05",
      participants: 30
    },
    {
      id: 5,
      title: "Testing Methodology Workshop",
      description: "Learning manual and automation testing techniques",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      category: "Testing",
      date: "2024-01-03",
      participants: 15
    },
    {
      id: 6,
      title: "Python Programming Session",
      description: "Building web applications and automation scripts with Python",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
      category: "Programming",
      date: "2023-12-28",
      participants: 22
    },
    {
      id: 7,
      title: "Graduation Ceremony",
      description: "Celebrating successful completion of internship programs",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
      category: "Event",
      date: "2023-12-20",
      participants: 45
    },
    {
      id: 8,
      title: "DOMINOVA Office Space",
      description: "Modern workspace designed for collaborative learning",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      category: "Workspace",
      date: "2023-12-15",
      participants: 0
    },
    {
      id: 9,
      title: "SQL Database Workshop",
      description: "Advanced database design and optimization techniques",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",
      category: "Database",
      date: "2023-12-10",
      participants: 16
    }
  ];

  const categories = ["All", "Workshop", "Design", "Analytics", "Programming", "Testing", "Event", "Workspace", "Database"];

  return (
    <Layout>
      <div className="min-h-screen py-12 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore highlights from our training sessions, workshops, events, and the vibrant learning 
              environment at DOMINOVA. See our community in action!
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Students Trained</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Workshops Conducted</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Expert Trainers</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">7</div>
                <div className="text-muted-foreground">Internship Domains</div>
              </CardContent>
            </Card>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <Card key={item.id} className="bg-card border-border overflow-hidden group hover:shadow-glow transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{item.category}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                  {item.participants > 0 && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {item.participants} participants
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="bg-secondary border-border p-8">
              <h3 className="text-2xl font-bold mb-4">
                Be Part of Our <span className="bg-gradient-primary bg-clip-text text-transparent">Community</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join our next batch of interns and be featured in our upcoming events and workshops. 
                Start your learning journey with DOMINOVA today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow transition-all duration-300">
                  Join Our Next Batch
                </button>
                <button className="px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-all duration-300">
                  Follow Us on Social Media
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;