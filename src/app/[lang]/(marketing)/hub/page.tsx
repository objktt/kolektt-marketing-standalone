import Link from "next/link";
import type { Locale } from "@/config/i18n-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kolektt Hub - Professional Vinyl Inventory Management",
  description:
    "Enterprise-grade inventory system for record shops and large-scale dealers. Streamline operations with automated cataloging, real-time pricing, and advanced analytics.",
};

export default async function HubPage({
  params,
}: {
  params: Promise<{
    lang: Locale;
  }>;
}) {
  const { lang } = await params;
  // Unused variable warning suppressed
  void lang;
  return (
    <>
      {/* Hero Section */}
      <div className="hero-banner-hub position-relative z-1 pt-200 xl-pt-150 lg-pt-120 pb-100 xl-pb-80 lg-pb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="hero-text-wrapper pe-xl-5">
                <div className="text-center text-lg-start">
                  <div className="badge-wrapper mb-25">
                    <span
                      className="badge"
                      style={{
                        backgroundColor: "#1F2937",
                        color: "#fff",
                        padding: "8px 16px",
                        borderRadius: "20px",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      🏢 For Professional Dealers
                    </span>
                  </div>
                  <h1 className="hero-heading color-dark font-Playfair wow fadeInUp mb-25">
                    Professional Vinyl
                    <br />
                    <span style={{ color: "#8A42FF" }}>
                      Inventory Management
                    </span>
                  </h1>
                  <p
                    className="fs-18 color-dark mb-40 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    Enterprise-grade inventory system for record shops and
                    large-scale dealers. Streamline your operations with
                    automated cataloging, real-time pricing, and advanced
                    analytics.
                  </p>

                  {/* Key Stats */}
                  <div
                    className="hero-stats d-flex flex-wrap justify-content-center justify-content-lg-start mb-40"
                    style={{ gap: "30px" }}
                  >
                    <div className="stat-item text-center text-lg-start">
                      <h3
                        className="fw-bold mb-5"
                        style={{ color: "#8A42FF", fontSize: "28px" }}
                      >
                        10M+
                      </h3>
                      <p className="fs-14 color-dark opacity-75 mb-0">
                        Records Managed
                      </p>
                    </div>
                    <div className="stat-item text-center text-lg-start">
                      <h3
                        className="fw-bold mb-5"
                        style={{ color: "#8A42FF", fontSize: "28px" }}
                      >
                        2,500+
                      </h3>
                      <p className="fs-14 color-dark opacity-75 mb-0">
                        Record Shops
                      </p>
                    </div>
                    <div className="stat-item text-center text-lg-start">
                      <h3
                        className="fw-bold mb-5"
                        style={{ color: "#8A42FF", fontSize: "28px" }}
                      >
                        99.2%
                      </h3>
                      <p className="fs-14 color-dark opacity-75 mb-0">
                        Uptime SLA
                      </p>
                    </div>
                  </div>

                  <div
                    className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start"
                    style={{ gap: "15px" }}
                  >
                    <Link
                      href={`#demo`}
                      className="btn-eighteen tran3s"
                      style={{
                        backgroundColor: "#8A42FF",
                        color: "#fff",
                        padding: "16px 30px",
                        borderRadius: "12px",
                        fontSize: "16px",
                        fontWeight: "600",
                        textDecoration: "none",
                        display: "inline-block",
                      }}
                    >
                      📊 Request Demo
                    </Link>
                    <Link
                      href={`#pricing`}
                      className="btn-nineteen tran3s"
                      style={{
                        backgroundColor: "transparent",
                        color: "#8A42FF",
                        padding: "14px 28px",
                        borderRadius: "12px",
                        fontSize: "16px",
                        fontWeight: "600",
                        textDecoration: "none",
                        display: "inline-block",
                        border: "2px solid #8A42FF",
                      }}
                    >
                      View Pricing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="hero-dashboard text-center mt-5 mt-lg-0">
                <div
                  className="dashboard-mockup position-relative"
                  style={{
                    background:
                      "linear-gradient(135deg, #1F2937 0%, #374151 100%)",
                    borderRadius: "20px",
                    padding: "40px 30px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Dashboard Screenshot Placeholder */}
                  <div
                    className="dashboard-content bg-white"
                    style={{
                      borderRadius: "16px",
                      padding: "30px",
                      minHeight: "400px",
                    }}
                  >
                    {/* Header */}
                    <div className="d-flex justify-content-between align-items-center mb-30">
                      <div>
                        <h4
                          className="fw-bold mb-5"
                          style={{ fontSize: "20px" }}
                        >
                          Inventory Dashboard
                        </h4>
                        <p className="fs-14 opacity-75 mb-0">
                          Live data - Updated every 30 seconds
                        </p>
                      </div>
                      <div className="d-flex" style={{ gap: "8px" }}>
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            backgroundColor: "#10B981",
                            borderRadius: "50%",
                          }}
                        ></div>
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            backgroundColor: "#F59E0B",
                            borderRadius: "50%",
                          }}
                        ></div>
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            backgroundColor: "#EF4444",
                            borderRadius: "50%",
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="row mb-25">
                      <div className="col-4">
                        <div
                          className="stat-card text-center p-15"
                          style={{
                            backgroundColor: "#f8f9fa",
                            borderRadius: "8px",
                          }}
                        >
                          <h5
                            className="fw-bold mb-5"
                            style={{ color: "#8A42FF" }}
                          >
                            15,247
                          </h5>
                          <p className="fs-12 mb-0">In Stock</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div
                          className="stat-card text-center p-15"
                          style={{
                            backgroundColor: "#f8f9fa",
                            borderRadius: "8px",
                          }}
                        >
                          <h5
                            className="fw-bold mb-5"
                            style={{ color: "#10B981" }}
                          >
                            $847K
                          </h5>
                          <p className="fs-12 mb-0">Inventory Value</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div
                          className="stat-card text-center p-15"
                          style={{
                            backgroundColor: "#f8f9fa",
                            borderRadius: "8px",
                          }}
                        >
                          <h5
                            className="fw-bold mb-5"
                            style={{ color: "#F59E0B" }}
                          >
                            127
                          </h5>
                          <p className="fs-12 mb-0">Low Stock</p>
                        </div>
                      </div>
                    </div>

                    {/* Chart Placeholder */}
                    <div className="chart-area mb-25">
                      <div
                        style={{
                          height: "120px",
                          background:
                            "linear-gradient(135deg, #8A42FF 0%, #6B2FE8 100%)",
                          borderRadius: "12px",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <div className="chart-lines position-absolute w-100 h-100 d-flex align-items-end justify-content-around p-20">
                          {Array.from({ length: 12 }, (_, i) => (
                            <div
                              key={i}
                              style={{
                                width: "6px",
                                height: `${30 + Math.random() * 60}px`,
                                backgroundColor: "rgba(255,255,255,0.3)",
                                borderRadius: "3px",
                              }}
                            ></div>
                          ))}
                        </div>
                        <div className="position-absolute bottom-0 start-0 p-3">
                          <span className="text-white fs-12 opacity-75">
                            Monthly Sales Trend
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Recent Items */}
                    <div className="recent-items">
                      <h6 className="fw-bold mb-15 fs-14">Recent Additions</h6>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex" style={{ gap: "8px" }}>
                          <div
                            style={{
                              width: "30px",
                              height: "30px",
                              backgroundColor: "#8A42FF",
                              borderRadius: "6px",
                            }}
                          ></div>
                          <div
                            style={{
                              width: "30px",
                              height: "30px",
                              backgroundColor: "#10B981",
                              borderRadius: "6px",
                            }}
                          ></div>
                          <div
                            style={{
                              width: "30px",
                              height: "30px",
                              backgroundColor: "#F59E0B",
                              borderRadius: "6px",
                            }}
                          ></div>
                          <div
                            style={{
                              width: "30px",
                              height: "30px",
                              backgroundColor: "#EF4444",
                              borderRadius: "6px",
                            }}
                          ></div>
                        </div>
                        <span className="fs-12 opacity-50">+47 today</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Grid Section */}
      <div className="block-feature-bento pt-100 lg-pt-80 pb-130 lg-pb-80">
        <div className="container">
          {/* Section Header */}
          <div className="row">
            <div className="col-xl-8 col-lg-9 m-auto">
              <div className="text-center mb-60 lg-mb-40">
                <div className="title-six">
                  <h2 className="color-dark">
                    Complete inventory management suite
                  </h2>
                </div>
                <p className="fs-18 color-dark pt-20 opacity-75">
                  Enterprise tools designed for professional record dealers and
                  shops
                </p>
              </div>
            </div>
          </div>

          {/* Bento Grid - Desktop */}
          <div
            className="bento-grid d-none d-lg-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gridTemplateRows: "repeat(6, 200px)",
              gap: "20px",
              maxWidth: "100%",
            }}
          >
            {/* Large Inventory Card */}
            <div
              className="bento-item bg-white"
              style={{
                gridColumn: "span 8",
                gridRow: "span 3",
                borderRadius: "24px",
                padding: "40px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                background: "linear-gradient(135deg, #1F2937 0%, #374151 100%)",
                color: "#fff",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div className="position-relative z-2">
                <div className="d-flex justify-content-between align-items-start mb-30">
                  <div>
                    <div style={{ fontSize: "48px", marginBottom: "15px" }}>
                      📊
                    </div>
                    <h3 className="fw-bold mb-15" style={{ fontSize: "28px" }}>
                      Inventory Management
                    </h3>
                    <p className="opacity-90 mb-0">
                      Real-time stock tracking, automated pricing, and
                      comprehensive analytics
                    </p>
                  </div>
                  <div className="text-end">
                    <div className="fw-bold" style={{ fontSize: "36px" }}>
                      15,247
                    </div>
                    <div className="opacity-75">Items in Stock</div>
                  </div>
                </div>

                <div className="row mt-40">
                  <div className="col-4">
                    <div className="stat-item">
                      <div className="fw-bold" style={{ fontSize: "20px" }}>
                        $847K
                      </div>
                      <div className="opacity-75 fs-14">Total Value</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item">
                      <div className="fw-bold" style={{ fontSize: "20px" }}>
                        2,847
                      </div>
                      <div className="opacity-75 fs-14">Rare Items</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item">
                      <div className="fw-bold" style={{ fontSize: "20px" }}>
                        127
                      </div>
                      <div className="opacity-75 fs-14">Low Stock</div>
                    </div>
                  </div>
                </div>

                <Link
                  href="#"
                  className="btn mt-30"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.2)",
                    color: "#fff",
                    padding: "12px 24px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  View Inventory →
                </Link>
              </div>

              {/* Background Decoration */}
              <div
                className="position-absolute"
                style={{
                  top: "-50px",
                  right: "-50px",
                  width: "200px",
                  height: "200px",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  zIndex: 1,
                }}
              ></div>
            </div>

            {/* Bulk Import Card */}
            <div
              className="bento-item bg-white"
              style={{
                gridColumn: "span 4",
                gridRow: "span 2",
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                color: "#fff",
              }}
            >
              <div style={{ fontSize: "40px", marginBottom: "20px" }}>📁</div>
              <h4 className="fw-bold mb-15">Bulk Import System</h4>
              <p className="mb-25 opacity-90 fs-15">
                CSV/Excel import with Discogs API integration. Process up to
                5,000 records at once.
              </p>
              <div className="mb-20">
                <div className="d-flex justify-content-between mb-10">
                  <span className="fs-14">Success Rate</span>
                  <span className="fs-14 fw-bold">97.3%</span>
                </div>
                <div
                  className="progress"
                  style={{
                    height: "6px",
                    backgroundColor: "rgba(255,255,255,0.2)",
                  }}
                >
                  <div
                    className="progress-bar"
                    style={{
                      width: "97%",
                      backgroundColor: "#fff",
                      borderRadius: "3px",
                    }}
                  ></div>
                </div>
              </div>
              <Link
                href="#"
                className="btn"
                style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Start Import →
              </Link>
            </div>

            {/* Barcode Scanner */}
            <div
              className="bento-item bg-white"
              style={{
                gridColumn: "span 4",
                gridRow: "span 1",
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                color: "#fff",
              }}
            >
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                    📷
                  </div>
                  <h5 className="fw-bold mb-5">Barcode Scanner</h5>
                  <p className="mb-0 opacity-90 fs-14">
                    Instant catalog lookup
                  </p>
                </div>
                <div className="text-end">
                  <div className="fw-bold" style={{ fontSize: "24px" }}>
                    247
                  </div>
                  <div className="opacity-75 fs-12">Scanned Today</div>
                </div>
              </div>
            </div>

            {/* B2B Sales Platform */}
            <div
              className="bento-item bg-white"
              style={{
                gridColumn: "span 8",
                gridRow: "span 2",
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                background: "#fff",
                position: "relative",
              }}
            >
              <div className="row h-100 align-items-center">
                <div className="col-7">
                  <div style={{ fontSize: "40px", marginBottom: "20px" }}>
                    💰
                  </div>
                  <h4 className="fw-bold mb-15 color-dark">
                    B2B Sales Management
                  </h4>
                  <p className="color-dark opacity-75 mb-25">
                    Wholesale pricing, bulk orders, and dealer network
                    management. Multi-channel sales integration with real-time
                    sync.
                  </p>

                  <div className="d-flex mb-25" style={{ gap: "30px" }}>
                    <div>
                      <div
                        className="fw-bold color-dark"
                        style={{ fontSize: "24px" }}
                      >
                        847
                      </div>
                      <div className="color-dark opacity-50 fs-14">
                        B2B Customers
                      </div>
                    </div>
                    <div>
                      <div
                        className="fw-bold color-dark"
                        style={{ fontSize: "24px" }}
                      >
                        $1.2M
                      </div>
                      <div className="color-dark opacity-50 fs-14">
                        Monthly Revenue
                      </div>
                    </div>
                    <div>
                      <div
                        className="fw-bold color-dark"
                        style={{ fontSize: "24px" }}
                      >
                        15%
                      </div>
                      <div className="color-dark opacity-50 fs-14">
                        Avg. Margin
                      </div>
                    </div>
                  </div>

                  <Link
                    href="#"
                    className="btn"
                    style={{
                      backgroundColor: "#8B5CF6",
                      color: "#fff",
                      padding: "12px 24px",
                      borderRadius: "12px",
                      textDecoration: "none",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Manage Sales →
                  </Link>
                </div>
                <div className="col-5">
                  <div className="sales-visual d-flex justify-content-center">
                    <div className="position-relative">
                      {/* Sales channels visualization */}
                      <div className="text-center">
                        <div className="mb-20">
                          <div className="d-flex justify-content-center mb-15">
                            <div
                              style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "#8B5CF6",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              <span style={{ color: "#fff", fontSize: "20px" }}>
                                🌐
                              </span>
                            </div>
                            <div
                              style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "#10B981",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <span style={{ color: "#fff", fontSize: "20px" }}>
                                🏢
                              </span>
                            </div>
                          </div>
                          <div className="d-flex justify-content-center">
                            <div
                              style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "#F59E0B",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              <span style={{ color: "#fff", fontSize: "20px" }}>
                                📱
                              </span>
                            </div>
                            <div
                              style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "#EF4444",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <span style={{ color: "#fff", fontSize: "20px" }}>
                                🎁
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="fs-12 color-dark opacity-50">
                          Multi-channel sync
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Analytics */}
            <div
              className="bento-item bg-white"
              style={{
                gridColumn: "span 4",
                gridRow: "span 2",
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                background: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
                color: "#fff",
              }}
            >
              <div style={{ fontSize: "40px", marginBottom: "20px" }}>📊</div>
              <h4 className="fw-bold mb-15">Market Analytics</h4>
              <p className="mb-25 opacity-90 fs-15">
                Real-time Discogs pricing with trend analysis and profit margin
                calculations
              </p>

              {/* Chart visualization */}
              <div className="market-chart mb-25">
                <div
                  className="d-flex align-items-end justify-content-between"
                  style={{ height: "80px", gap: "4px" }}
                >
                  {Array.from({ length: 12 }, (_, i) => (
                    <div
                      key={i}
                      style={{
                        width: "8px",
                        height: `${20 + Math.random() * 50}px`,
                        backgroundColor: "rgba(255,255,255,0.4)",
                        borderRadius: "4px",
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <div>
                  <div className="fw-bold" style={{ fontSize: "18px" }}>
                    +23.7%
                  </div>
                  <div className="opacity-75 fs-12">ROI This Quarter</div>
                </div>
                <div className="text-end">
                  <div className="fw-bold" style={{ fontSize: "18px" }}>
                    $47
                  </div>
                  <div className="opacity-75 fs-12">Avg. Margin</div>
                </div>
              </div>
            </div>

            {/* Store Locations */}
            <div
              className="bento-item bg-white"
              style={{
                gridColumn: "span 4",
                gridRow: "span 1",
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                background: "#fff",
              }}
            >
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                    🏢
                  </div>
                  <h5 className="fw-bold mb-5 color-dark">Store Locations</h5>
                  <p className="mb-0 color-dark opacity-50 fs-14">
                    Multi-location tracking
                  </p>
                </div>
                <div className="text-end">
                  <div
                    className="fw-bold color-dark"
                    style={{ fontSize: "20px" }}
                  >
                    3
                  </div>
                  <div className="color-dark opacity-50 fs-12">
                    Active Stores
                  </div>
                </div>
              </div>
            </div>

            {/* API Integration */}
            <div
              className="bento-item bg-white"
              style={{
                gridColumn: "span 4",
                gridRow: "span 1",
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                background: "linear-gradient(135deg, #EC4899 0%, #BE185D 100%)",
                color: "#fff",
              }}
            >
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                    🔗
                  </div>
                  <h5 className="fw-bold mb-5">API Integration</h5>
                  <p className="mb-0 opacity-90 fs-14">Discogs & eBay sync</p>
                </div>
                <div className="text-end">
                  <div className="fw-bold" style={{ fontSize: "20px" }}>
                    99.8%
                  </div>
                  <div className="opacity-75 fs-12">Uptime</div>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive Grid - Mobile version */}
          <div className="bento-grid-mobile d-block d-lg-none">
            {/* Mobile Stack Layout */}
            <div
              className="mobile-card mb-4"
              style={{
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                background: "linear-gradient(135deg, #1F2937 0%, #374151 100%)",
                color: "#fff",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "15px" }}>📊</div>
              <h3 className="fw-bold mb-15">Inventory Management</h3>
              <div className="d-flex justify-content-between mb-20">
                <div>
                  <div className="fw-bold" style={{ fontSize: "24px" }}>
                    15,247
                  </div>
                  <div className="opacity-75 fs-14">Items in Stock</div>
                </div>
                <div>
                  <div className="fw-bold" style={{ fontSize: "20px" }}>
                    $847K
                  </div>
                  <div className="opacity-75 fs-14">Total Value</div>
                </div>
              </div>
              <Link
                href="#"
                className="btn"
                style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  color: "#fff",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                View Inventory →
              </Link>
            </div>

            <div
              className="mobile-card mb-4"
              style={{
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                color: "#fff",
              }}
            >
              <div style={{ fontSize: "40px", marginBottom: "15px" }}>📁</div>
              <h4 className="fw-bold mb-15">Bulk Import System</h4>
              <p className="mb-20 opacity-90">
                CSV/Excel import with Discogs API integration
              </p>
              <div className="d-flex justify-content-between mb-15">
                <span>Success Rate</span>
                <span className="fw-bold">97.3%</span>
              </div>
              <Link
                href="#"
                className="btn"
                style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  color: "#fff",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                Start Import →
              </Link>
            </div>

            <div
              className="mobile-card mb-4"
              style={{
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                background: "#fff",
              }}
            >
              <div style={{ fontSize: "40px", marginBottom: "15px" }}>💰</div>
              <h4 className="fw-bold mb-15 color-dark">B2B Sales Management</h4>
              <p className="color-dark opacity-75 mb-20">
                Wholesale pricing and bulk orders
              </p>
              <div className="d-flex justify-content-between mb-20">
                <div>
                  <div className="fw-bold color-dark">847</div>
                  <div className="color-dark opacity-50 fs-14">
                    B2B Customers
                  </div>
                </div>
                <div>
                  <div className="fw-bold color-dark">$1.2M</div>
                  <div className="color-dark opacity-50 fs-14">
                    Monthly Revenue
                  </div>
                </div>
              </div>
              <Link
                href="#"
                className="btn"
                style={{
                  backgroundColor: "#8B5CF6",
                  color: "#fff",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                Manage Sales →
              </Link>
            </div>

            <div
              className="mobile-card mb-4"
              style={{
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                background: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
                color: "#fff",
              }}
            >
              <div style={{ fontSize: "40px", marginBottom: "15px" }}>📊</div>
              <h4 className="fw-bold mb-15">Market Analytics</h4>
              <div className="d-flex justify-content-between">
                <div>
                  <div className="fw-bold" style={{ fontSize: "18px" }}>
                    +23.7%
                  </div>
                  <div className="opacity-75 fs-12">ROI This Quarter</div>
                </div>
                <div>
                  <div className="fw-bold" style={{ fontSize: "18px" }}>
                    $47
                  </div>
                  <div className="opacity-75 fs-12">Avg. Margin</div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div
                  className="mobile-card mb-4"
                  style={{
                    borderRadius: "24px",
                    padding: "20px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    background:
                      "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                    color: "#fff",
                    height: "100%",
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                    📷
                  </div>
                  <h5 className="fw-bold mb-5">Barcode Scanner</h5>
                  <div className="fw-bold" style={{ fontSize: "20px" }}>
                    247
                  </div>
                  <div className="opacity-75 fs-12">Scanned Today</div>
                </div>
              </div>
              <div className="col-6">
                <div
                  className="mobile-card mb-4"
                  style={{
                    borderRadius: "24px",
                    padding: "20px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    background:
                      "linear-gradient(135deg, #EC4899 0%, #BE185D 100%)",
                    color: "#fff",
                    height: "100%",
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                    🔗
                  </div>
                  <h5 className="fw-bold mb-5">API Integration</h5>
                  <div className="fw-bold" style={{ fontSize: "20px" }}>
                    99.8%
                  </div>
                  <div className="opacity-75 fs-12">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
