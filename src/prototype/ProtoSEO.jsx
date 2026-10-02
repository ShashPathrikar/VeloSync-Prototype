import React, { useEffect } from "react";

const ProtoSEO = () => {
  useEffect(() => {
    document.title = "VeloSynq | Engineering & Product Platform — Jira, Salesforce, Confluence Alternative";

    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Core SEO
    setMeta("description", "VeloSynq is an all-in-one engineering & SaaS platform. Replace Jira, Confluence, Salesforce, and Contentful with one unified suite. Dedicated engineering squads + SaaS products with 85% cost savings.");
    setMeta("keywords", "VeloSynq, SprintSynq, DocSynq, ContentSynq, ClientSynq, Jira alternative, Confluence alternative, Salesforce alternative, product engineering, agile project management, enterprise on-premise, headless CMS, CRM platform, engineering squads");
    setMeta("robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMeta("author", "VeloSynq Inc.");
    setMeta("theme-color", "#546B41");

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://velosynq.com/");

    // Open Graph
    setMeta("og:title", "VeloSynq | Engineering & Dual-Engine SaaS Platform", true);
    setMeta("og:description", "Replace Jira, Salesforce & Confluence with VeloSynq's unified suite. Dedicated engineering squads + SaaS products. 85% cost savings. Ship 3× faster.", true);
    setMeta("og:type", "website", true);
    setMeta("og:url", "https://velosynq.com/", true);
    setMeta("og:site_name", "VeloSynq", true);
    setMeta("og:locale", "en_US", true);
    setMeta("og:image", "https://velosynq.com/og-image.jpg", true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("og:image:alt", "VeloSynq — Engineering & Product Platform", true);

    // Twitter Cards
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "VeloSynq | Engineering & SaaS Platform");
    setMeta("twitter:description", "Replace Jira, Salesforce & Confluence with VeloSynq. Ship 3× faster with dedicated engineering squads + unified SaaS products.");
    setMeta("twitter:image", "https://velosynq.com/og-image.jpg");
    setMeta("twitter:site", "@VeloSynq");

    // JSON-LD Structured Data
    const schemaOrgData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://velosynq.com/#organization",
          "name": "VeloSynq",
          "url": "https://velosynq.com",
          "logo": { "@type": "ImageObject", "url": "https://velosynq.com/logo.png" },
          "description": "VeloSynq is an engineering and SaaS platform combining dedicated engineering squads with scalable software products to help companies ship 3× faster.",
          "founder": [
            { "@type": "Person", "name": "Harikrishna" },
            { "@type": "Person", "name": "Nihal" }
          ],
          "sameAs": ["https://twitter.com/VeloSynq", "https://linkedin.com/company/velosynq"]
        },
        {
          "@type": "WebSite",
          "@id": "https://velosynq.com/#website",
          "url": "https://velosynq.com",
          "name": "VeloSynq",
          "description": "Engineering & Dual-Engine SaaS Platform",
          "publisher": { "@id": "https://velosynq.com/#organization" }
        },
        {
          "@type": "SoftwareApplication",
          "@id": "https://velosynq.com/#platform",
          "name": "VeloSynq Platform",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web, Cloud, On-Premise",
          "description": "Unified SaaS platform replacing Jira, Confluence, Salesforce, and Contentful — with smart workflow automation, sprint planning, CRM, and headless CMS. Available on Cloud SaaS and Enterprise On-Premises.",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "25",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceCurrency": "USD",
              "price": "25",
              "referenceQuantity": { "@type": "QuantitativeValue", "value": "1", "unitCode": "MON" }
            }
          },
          "featureList": [
            "SprintSynq – Jira Alternative with Sprint Planning & Kanban",
            "DocSynq – Confluence Alternative with Team Wikis",
            "ContentSynq – Headless CMS with GraphQL/REST APIs",
            "ClientSynq – Salesforce Alternative CRM",
            "VeloAnalytics – Unified BI & Telemetry Dashboards",
            "Intelligent Workflow Automation & Custom Engineering Squads"
          ]
        },
        {
          "@type": "Service",
          "@id": "https://velosynq.com/#engineering-service",
          "name": "Dedicated Engineering Squads",
          "provider": { "@id": "https://velosynq.com/#organization" },
          "serviceType": "Software Engineering Outsourcing",
          "description": "Dedicated full-stack developers, DevOps engineers, QA specialists, and automation engineers integrated directly into your team on a monthly retainer.",
          "areaServed": "Worldwide"
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is VeloSynq a Jira alternative?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes. SprintSynq, part of the VeloSynq suite, is a powerful Jira alternative with sprint planning, kanban boards, backlog management, and real-time issue tracking — at a fraction of the Atlassian per-seat cost." }
            },
            {
              "@type": "Question",
              "name": "Does VeloSynq offer enterprise on-premises deployment?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes. VeloSynq offers full enterprise on-premises and private VPC deployments for banking, healthcare, and government sectors — with 100% data residency and air-gapped installation support." }
            },
            {
              "@type": "Question",
              "name": "What is VeloSynq's Dual-Engine strategy?",
              "acceptedAnswer": { "@type": "Answer", "text": "VeloSynq operates two self-reinforcing engines: dedicated engineering squads that generate immediate cash flow and field insights, and scalable SaaS products that produce high-margin recurring revenue." }
            }
          ]
        }
      ]
    };

    let script = document.getElementById("velosynq-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.id = "velosynq-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaOrgData);

    return () => {
      const s = document.getElementById("velosynq-jsonld");
      if (s) s.remove();
    };
  }, []);

  return null;
};

export default ProtoSEO;
