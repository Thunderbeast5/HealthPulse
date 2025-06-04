import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import doctorAnim from '../../assets/doctor.json';
import heartAnim from '../../assets/logo copy.json'
import { 
  Heart, 
  Users, 
  Shield, 
  Clock, 
  MapPin, 
  Phone, 
  Video, 
  FileText, 
  TrendingUp,
  CheckCircle,
  Star,
  Menu,
  X,
  Play,
  Calendar,
  Stethoscope,
  Activity,
  Globe,
  Zap,
  Award,
  ArrowRight,
  Sparkles,
  Target
} from 'lucide-react';


const HealthPulse = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({ patients: 0, doctors: 0, consultations: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Rural Maharashtra",
      text: "HealthPulse connected me with a specialist doctor from Mumbai. Got proper treatment for my diabetes without traveling 200km!",
      rating: 5
    },
    {
      name: "Dr. Priya Sharma",
      location: "Verified Cardiologist",
      text: "This platform allows me to help patients who otherwise wouldn't have access to quality healthcare. The interface is intuitive and secure.",
      rating: 5
    },
    {
      name: "Meera Patel",
      location: "Semi-urban Gujarat",
      text: "Simple to use, even for someone like me who's not tech-savvy. My elderly mother got excellent care during COVID.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const animateStats = () => {
      const targets = { patients: 10000, doctors: 500, consultations: 25000 };
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setAnimatedStats({
          patients: Math.floor(targets.patients * progress),
          doctors: Math.floor(targets.doctors * progress),
          consultations: Math.floor(targets.consultations * progress)
        });

        if (step >= steps) clearInterval(timer);
      }, increment);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats();
        observer.disconnect(); // Prevent multiple animations
      }
    });

    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Doctors",
      description: "Admin-verified medical professionals ensuring authentic healthcare delivery",
      color: "from-lime-400 to-green-500"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Integrated Video Calls",
      description: "Seamless video consultations with chat and payment integration",
      color: "from-green-400 to-lime-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Graphical EHR",
      description: "Visual health records with glucose/BP trend tracking and analytics",
      color: "from-yellow-300 to-lime-400"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Low Bandwidth Optimized",
      description: "Designed for rural connectivity with optimized data usage",
      color: "from-lime-300 to-green-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Role-based Dashboards",
      description: "Customized interfaces for Admin, Doctor, and Patient roles",
      color: "from-green-300 to-lime-400"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-time Scheduling",
      description: "Smart scheduling with buffer time slots and availability management",
      color: "from-lime-400 to-yellow-400"
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Sign Up & Verify",
      description: "Create your account with secure verification process",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Find Verified Doctors",
      description: "Browse and select from our network of verified specialists",
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Book Consultation",
      description: "Schedule video consultations at your convenient time",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Receive Care",
      description: "Get diagnosis, e-prescriptions, and follow-up care",
      icon: <Heart className="w-6 h-6" />
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-lime-50 to-green-50 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-64 h-64 bg-gradient-to-br from-lime-200/30 to-green-300/30 rounded-full blur-3xl"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
            transform: `translate(-50%, -50%) scale(${1 + scrollY / 10000})`
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-lime-300/20 rounded-full blur-3xl"
          style={{
            right: mousePosition.x / 15,
            bottom: mousePosition.y / 15,
            transform: `translate(50%, 50%) scale(${0.8 + scrollY / 8000})`
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-lime-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10">
                    <Lottie animationData={heartAnim} loop={true} autoplay={true} />
                </div>
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-lime-600 to-green-700 bg-clip-text text-transparent">
                    HealthPulse
                </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-lime-600 transition-colors font-medium">Home</a>
              <a href="#features" className="text-gray-700 hover:text-lime-600 transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-lime-600 transition-colors font-medium">How It Works</a>
              <a href="#testimonials" className="text-gray-700 hover:text-lime-600 transition-colors font-medium">Reviews</a>
              <Link to="/doctor">
              <button className="bg-gradient-to-r from-lime-500 to-green-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all border-2 border-lime-600 hover:border-green-700">
                Get Started
              </button>
              </Link>
            </div>

            <button 
              className="md:hidden transform hover:scale-110 transition-transform"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-lime-200">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 font-medium">Home</a>
              <a href="#features" className="block py-2 text-gray-700 font-medium">Features</a>
              <a href="#how-it-works" className="block py-2 text-gray-700 font-medium">How It Works</a>
              <a href="#testimonials" className="block py-2 text-gray-700 font-medium">Reviews</a>
              <button className="w-full bg-gradient-to-r from-lime-500 to-green-600 text-white py-3 rounded-lg font-bold mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <div className="space-y-6">
               
                <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                  Quality Healthcare
                  <span className="block bg-gradient-to-r from-lime-600 via-green-600 to-lime-700 bg-clip-text text-transparent animate-pulse">
                    For Everyone
                  </span>
                </h1>
                <p className="text-2xl text-gray-700 leading-relaxed font-medium">
                  Connecting rural and semi-urban patients with verified doctors through 
                  secure, affordable, and user-friendly telemedicine consultations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-gradient-to-r from-lime-500 to-green-600 text-white px-10 py-5 text-xl font-black rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center space-x-3 border-4 border-green-700 group">
                  
                  <span>Start Consultation</span>
                  
                </button>
                <button className="border-4 border-lime-500 text-lime-700 px-10 py-5 text-xl font-black rounded-lg hover:bg-lime-50 transition-all flex items-center justify-center space-x-3 group">
                  <Target className="w-6 h-6 group-hover:rotate-90 transition-transform" />
                  <span>Learn More</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t-4 border-lime-200">
                <div className="text-center transform hover:scale-110 transition-transform">
                  <div className="text-4xl font-black text-lime-600 animate-bounce">80%</div>
                  <div className="text-sm text-gray-600 font-bold">Specialists In Urban</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform">
                  <div className="text-4xl font-black text-green-600 animate-bounce" style={{animationDelay: '0.2s'}}>24/7</div>
                  <div className="text-sm text-gray-600 font-bold">Available Support</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform">
                  <div className="text-4xl font-black text-yellow-600 animate-bounce" style={{animationDelay: '0.4s'}}>100%</div>
                  <div className="text-sm text-gray-600 font-bold">Verfied Doctors</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Main Card */}
              {/* <div className="bg-gradient-to-br from-lime-100 via-green-100 to-yellow-100 rounded-3xl p-8 relative overflow-hidden shadow-2xl border-4 border-lime-200"> */}
                {/* Floating decorative elements */}
               <Lottie animationData={doctorAnim} loop={true} autoplay={true}/>
                
               

                {/* Main Content */}
                
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 bg-gradient-to-r from-lime-500 via-green-600 to-lime-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 bg-[length:60px_60px] opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div className="space-y-4 transform hover:scale-110 transition-transform">
              <div className="text-6xl font-black animate-pulse">{animatedStats.patients.toLocaleString()}+</div>
              <div className="text-lime-100 text-xl font-bold">PATIENTS SERVED</div>
            </div>
            <div className="space-y-4 transform hover:scale-110 transition-transform">
              <div className="text-6xl font-black animate-pulse" style={{animationDelay: '0.2s'}}>{animatedStats.doctors.toLocaleString()}+</div>
              <div className="text-lime-100 text-xl font-bold">VERIFIED DOCTORS</div>
            </div>
            <div className="space-y-4 transform hover:scale-110 transition-transform">
              <div className="text-6xl font-black animate-pulse" style={{animationDelay: '0.4s'}}>{animatedStats.consultations.toLocaleString()}+</div>
              <div className="text-lime-100 text-xl font-bold">CONSULTATIONS COMPLETED</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Why Choose HealthPulse?
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto font-medium">
              Our platform combines cutting-edge technology with healthcare expertise 
              to deliver exceptional telemedicine experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-4 border-4 border-lime-200 hover:border-green-400 group"
              >
                <div className={`bg-gradient-to-r ${feature.color} rounded-xl p-4 w-fit mb-8 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-lg font-medium">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gradient-to-br from-lime-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              How HealthPulse Works
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto font-medium">
              Getting quality healthcare is now just four simple steps away
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="bg-gradient-to-r from-lime-500 to-green-600 rounded-full w-20 h-20 flex items-center justify-center text-white font-black text-2xl mx-auto mb-6 shadow-xl transform group-hover:scale-110 transition-transform border-4 border-green-700">
                    {item.step}
                  </div>
                  <div className="bg-white rounded-full p-6 w-fit mx-auto shadow-xl border-4 border-lime-300 transform group-hover:scale-110 transition-transform">
                    <div className="text-lime-600">
                      {item.icon}
                    </div>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-1 bg-gradient-to-r from-lime-300 to-green-400 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 font-medium text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              What Our Users Say
            </h2>
            <p className="text-2xl text-gray-700 font-medium">
              Real stories from patients and doctors using HealthPulse
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-2xl relative overflow-hidden border-4 border-lime-200">
              <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-lime-500 to-green-600"></div>
              
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400 animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                
                <blockquote className="text-2xl text-gray-800 mb-8 italic font-medium leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div>
                  <div className="font-black text-gray-900 text-2xl">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600 text-lg font-medium">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-10 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-4 h-4 rounded-full transition-all transform hover:scale-125 ${
                      index === currentTestimonial 
                        ? 'bg-lime-600 shadow-lg' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-lime-500 via-green-600 to-lime-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 bg-[length:40px_40px] opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black text-white mb-8">
              Ready to Transform Your Healthcare Experience?
            </h2>
            <p className="text-2xl text-lime-100 mb-12 font-medium">
              Join thousands of patients who have found quality healthcare through HealthPulse
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-lime-700 px-12 py-6 text-xl font-black rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all border-4 border-lime-200">
                START FREE CONSULTATION
              </button>
              <button className="border-4 border-white text-white px-12 py-6 text-xl font-black rounded-lg hover:bg-white hover:text-lime-700 transition-all">
                CONTACT SUPPORT
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthPulse;