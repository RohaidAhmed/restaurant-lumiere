'use client'

import React, { useState } from 'react';

const LuxuryRestaurant = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const menuItems = [
    {
      name: "Seared Scallops",
      description: "Pan-seared diver scallops with cauliflower purée, crispy prosciutto, and truffle oil",
      price: "$38",
      image: "🦪"
    },
    {
      name: "Wagyu Beef Tenderloin",
      description: "Australian Wagyu with roasted garlic mash, broccolini, and red wine reduction",
      price: "$68",
      image: "🥩"
    },
    {
      name: "Lobster Risotto",
      description: "Maine lobster, arborio rice, saffron, and parmesan with microgreens",
      price: "$52",
      image: "🦞"
    },
    {
      name: "Chilean Sea Bass",
      description: "Miso-glazed sea bass with jasmine rice, bok choy, and yuzu beurre blanc",
      price: "$45",
      image: "🐟"
    },
    {
      name: "Duck Confit",
      description: "Crispy duck leg with pommes Anna, roasted figs, and port wine sauce",
      price: "$42",
      image: "🦆"
    },
    {
      name: "Chocolate Soufflé",
      description: "Warm dark chocolate soufflé with vanilla bean ice cream and gold leaf",
      price: "$18",
      image: "🍫"
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  return (
    <div style={{
      fontFamily: 'Cormorant Garamond, Georgia, serif',
      color: '#1a1a1a',
      background: '#fafaf8'
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(26, 26, 26, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '20px 0',
        zIndex: 1000,
        borderBottom: '1px solid rgba(212, 175, 55, 0.3)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '28px',
            fontWeight: '600',
            letterSpacing: '3px',
            color: '#d4af37'
          }}>
            LUMIÈRE
          </div>
          <div style={{ display: 'flex', gap: '40px' }}>
            {['Menu', 'About', 'Reserve'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{
                color: '#f5f5f5',
                textDecoration: 'none',
                fontSize: '16px',
                letterSpacing: '1.5px',
                transition: 'color 0.3s',
                fontFamily: 'sans-serif'
              }}>
                {item.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        height: '100vh',
        background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600") center/cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '800px',
          padding: '0 40px'
        }}>
          <div style={{
            fontSize: '18px',
            letterSpacing: '4px',
            color: '#d4af37',
            marginBottom: '20px',
            fontFamily: 'sans-serif'
          }}>
            MICHELIN STARRED
          </div>
          <h1 style={{
            fontSize: '80px',
            fontWeight: '600',
            marginBottom: '30px',
            color: '#fff',
            letterSpacing: '5px',
            lineHeight: '1.1'
          }}>
            LUMIÈRE
          </h1>
          <p style={{
            fontSize: '24px',
            color: '#f5f5f5',
            marginBottom: '50px',
            lineHeight: '1.6',
            fontWeight: '300'
          }}>
            An exquisite journey through contemporary French cuisine,<br />
            where art meets gastronomy
          </p>
          <a href="#reserve" style={{
            display: 'inline-block',
            background: '#d4af37',
            color: '#1a1a1a',
            padding: '18px 50px',
            textDecoration: 'none',
            fontSize: '14px',
            letterSpacing: '2px',
            fontWeight: '600',
            border: '2px solid #d4af37',
            transition: 'all 0.3s',
            fontFamily: 'sans-serif'
          }}>
            RESERVE YOUR TABLE
          </a>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#fff',
          fontSize: '14px',
          letterSpacing: '2px',
          fontFamily: 'sans-serif'
        }}>
          ↓ SCROLL TO EXPLORE ↓
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" style={{
        padding: '120px 40px',
        background: '#fafaf8'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{
              fontSize: '14px',
              letterSpacing: '3px',
              color: '#d4af37',
              marginBottom: '15px',
              fontFamily: 'sans-serif'
            }}>
              CURATED SELECTIONS
            </div>
            <h2 style={{
              fontSize: '60px',
              marginBottom: '20px',
              fontWeight: '600',
              color: '#1a1a1a'
            }}>
              Our Menu
            </h2>
            <p style={{
              fontSize: '20px',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Each dish is a masterpiece, crafted with the finest ingredients
              and presented with artistic precision
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px'
          }}>
            {menuItems.map((item, index) => (
              <div key={index} style={{
                background: '#fff',
                padding: '40px',
                border: '1px solid #e8e8e8',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <div style={{ fontSize: '60px', marginBottom: '20px' }}>
                  {item.image}
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '15px',
                  borderBottom: '1px dotted #d4af37',
                  paddingBottom: '10px'
                }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#1a1a1a'
                  }}>
                    {item.name}
                  </h3>
                  <span style={{
                    fontSize: '20px',
                    color: '#d4af37',
                    fontWeight: '600',
                    fontFamily: 'sans-serif'
                  }}>
                    {item.price}
                  </span>
                </div>
                <p style={{
                  fontSize: '16px',
                  color: '#666',
                  lineHeight: '1.6',
                  fontFamily: 'sans-serif'
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '120px 40px',
        background: '#1a1a1a',
        color: '#f5f5f5'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              fontSize: '14px',
              letterSpacing: '3px',
              color: '#d4af37',
              marginBottom: '15px',
              fontFamily: 'sans-serif'
            }}>
              EST. 2018
            </div>
            <h2 style={{
              fontSize: '52px',
              marginBottom: '30px',
              fontWeight: '600'
            }}>
              Our Story
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#ccc',
              marginBottom: '25px',
              fontFamily: 'sans-serif'
            }}>
              Founded by Chef Jean-Pierre Rousseau, Lumière represents the pinnacle
              of fine dining excellence. With three Michelin stars and a passion for
              culinary innovation, we transform the finest seasonal ingredients into
              unforgettable experiences.
            </p>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#ccc',
              marginBottom: '25px',
              fontFamily: 'sans-serif'
            }}>
              Our intimate 30-seat dining room offers an exclusive atmosphere where
              every detail is carefully orchestrated to create moments of pure
              gastronomic joy.
            </p>
            <div style={{
              display: 'flex',
              gap: '40px',
              marginTop: '40px'
            }}>
              <div>
                <div style={{
                  fontSize: '40px',
                  color: '#d4af37',
                  fontWeight: '600',
                  marginBottom: '5px'
                }}>
                  ⭐⭐⭐
                </div>
                <div style={{
                  fontSize: '14px',
                  letterSpacing: '2px',
                  fontFamily: 'sans-serif'
                }}>
                  MICHELIN STARS
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '40px',
                  color: '#d4af37',
                  fontWeight: '600',
                  marginBottom: '5px'
                }}>
                  50+
                </div>
                <div style={{
                  fontSize: '14px',
                  letterSpacing: '2px',
                  fontFamily: 'sans-serif'
                }}>
                  AWARDS
                </div>
              </div>
            </div>
          </div>
          <div style={{
            height: '600px',
            background: 'url("https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800") center/cover',
            border: '8px solid #d4af37'
          }} />
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reserve" style={{
        padding: '120px 40px',
        background: '#fafaf8'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              fontSize: '14px',
              letterSpacing: '3px',
              color: '#d4af37',
              marginBottom: '15px',
              fontFamily: 'sans-serif'
            }}>
              BOOK YOUR EXPERIENCE
            </div>
            <h2 style={{
              fontSize: '60px',
              marginBottom: '20px',
              fontWeight: '600',
              color: '#1a1a1a'
            }}>
              Reservations
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              fontFamily: 'sans-serif'
            }}>
              Reserve your table for an unforgettable evening
            </p>
          </div>

          {showSuccess && (
            <div style={{
              background: '#d4af37',
              color: '#1a1a1a',
              padding: '20px',
              marginBottom: '30px',
              textAlign: 'center',
              fontSize: '16px',
              letterSpacing: '1px',
              fontWeight: '600',
              fontFamily: 'sans-serif'
            }}>
              ✓ RESERVATION REQUEST SUBMITTED! WE'LL CONTACT YOU SHORTLY.
            </div>
          )}

          <form onSubmit={handleSubmit} style={{
            background: '#fff',
            padding: '60px',
            border: '1px solid #e8e8e8'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              marginBottom: '30px'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '10px',
                  fontSize: '12px',
                  letterSpacing: '2px',
                  color: '#666',
                  fontFamily: 'sans-serif'
                }}>
                  FULL NAME *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '1px solid #ddd',
                    fontSize: '16px',
                    fontFamily: 'serif',
                    background: '#fafaf8'
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '10px',
                  fontSize: '12px',
                  letterSpacing: '2px',
                  color: '#666',
                  fontFamily: 'sans-serif'
                }}>
                  EMAIL *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '1px solid #ddd',
                    fontSize: '16px',
                    fontFamily: 'serif',
                    background: '#fafaf8'
                  }}
                />
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              marginBottom: '30px'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '10px',
                  fontSize: '12px',
                  letterSpacing: '2px',
                  color: '#666',
                  fontFamily: 'sans-serif'
                }}>
                  PHONE *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '1px solid #ddd',
                    fontSize: '16px',
                    fontFamily: 'serif',
                    background: '#fafaf8'
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '10px',
                  fontSize: '12px',
                  letterSpacing: '2px',
                  color: '#666',
                  fontFamily: 'sans-serif'
                }}>
                  NUMBER OF GUESTS *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '1px solid #ddd',
                    fontSize: '16px',
                    fontFamily: 'serif',
                    background: '#fafaf8'
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              marginBottom: '40px'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '10px',
                  fontSize: '12px',
                  letterSpacing: '2px',
                  color: '#666',
                  fontFamily: 'sans-serif'
                }}>
                  DATE *
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '1px solid #ddd',
                    fontSize: '16px',
                    fontFamily: 'serif',
                    background: '#fafaf8'
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '10px',
                  fontSize: '12px',
                  letterSpacing: '2px',
                  color: '#666',
                  fontFamily: 'sans-serif'
                }}>
                  TIME *
                </label>
                <select
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '1px solid #ddd',
                    fontSize: '16px',
                    fontFamily: 'serif',
                    background: '#fafaf8'
                  }}
                >
                  <option value="">Select Time</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="17:30">5:30 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                </select>
              </div>
            </div>

            <button type="submit" style={{
              width: '100%',
              background: '#d4af37',
              color: '#1a1a1a',
              padding: '20px',
              border: 'none',
              fontSize: '14px',
              letterSpacing: '3px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s',
              fontFamily: 'sans-serif'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1a1a1a';
                e.currentTarget.style.color = '#d4af37';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#d4af37';
                e.currentTarget.style.color = '#1a1a1a';
              }}>
              REQUEST RESERVATION
            </button>
          </form>

          <div style={{
            marginTop: '50px',
            textAlign: 'center',
            padding: '40px',
            background: '#fff',
            border: '1px solid #e8e8e8'
          }}>
            <h3 style={{
              fontSize: '24px',
              marginBottom: '20px',
              color: '#1a1a1a'
            }}>
              Visit Us
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#666',
              marginBottom: '10px',
              fontFamily: 'sans-serif'
            }}>
              123 Gourmet Avenue, Beverly Hills, CA 90210
            </p>
            <p style={{
              fontSize: '16px',
              color: '#666',
              marginBottom: '10px',
              fontFamily: 'sans-serif'
            }}>
              Tuesday - Saturday: 5:00 PM - 10:00 PM
            </p>
            <p style={{
              fontSize: '16px',
              color: '#666',
              fontFamily: 'sans-serif'
            }}>
              Phone: (310) 555-DINE
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1a1a1a',
        color: '#f5f5f5',
        padding: '60px 40px',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '32px',
          fontWeight: '600',
          letterSpacing: '4px',
          color: '#d4af37',
          marginBottom: '20px'
        }}>
          LUMIÈRE
        </div>
        <p style={{
          fontSize: '14px',
          color: '#999',
          marginBottom: '30px',
          fontFamily: 'sans-serif'
        }}>
          Where culinary art illuminates the senses
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          marginBottom: '30px'
        }}>
          {['Instagram', 'Facebook', 'Twitter'].map(social => (
            <a key={social} href="#" style={{
              color: '#d4af37',
              textDecoration: 'none',
              fontSize: '14px',
              letterSpacing: '1px',
              fontFamily: 'sans-serif'
            }}>
              {social}
            </a>
          ))}
        </div>
        <p style={{
          fontSize: '12px',
          color: '#666',
          fontFamily: 'sans-serif'
        }}>
          © 2024 Lumière Restaurant. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LuxuryRestaurant;