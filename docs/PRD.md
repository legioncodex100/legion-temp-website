# Product Requirements Document: Legion Grappling Academy Website

## 1. Executive Summary

**Project**: Complete rebuild of the Legion Grappling Academy website.  
**Goal**: A sleek, dark-themed Next.js website that drives free trial class bookings for men, women, boys, and girls across multiple grappling disciplines.

---

## 2. Brand & Identity

| Attribute | Value |
|-----------|-------|
| **Name** | Legion Grappling Academy |
| **Tagline** | Train With Purpose. |
| **Location** | Unit 5 Transform House, 16 Wellington Road, London, E10 7QF |
| **Phone** | 020 3490 8660 |
| **Hours** | 6pm - 10pm Weekdays |

---

## 3. Target Audiences

| Persona | Description | Primary Need |
|---------|-------------|--------------|
| **Parents** | Looking for structured activities for kids | Safe, reputable classes for boys/girls |
| **Competitive Grapplers** | Experienced athletes seeking high-level training | Competition prep, advanced techniques |
| **Fitness Beginners** | Adults new to martial arts | Welcoming environment, no experience required |

> [!NOTE]
> All classes are single-sex. Highlight women's and girls' classes prominently without explicitly stating "men only" for other classes.

---

## 4. Programs & Class Hierarchy

Classes are organized by **Gender → Discipline**:

### Men
| Class | Description |
|-------|-------------|
| Wrestling | Takedowns, clinch work, mat control |
| MMA | Striking-to-grappling transitions, cage wrestling |
| BJJ (Gi) | Gi grips, guard work, submissions |
| No-Gi Grappling | No-gi entries, leg locks, wrestling integration |

### Women
| Class | Description |
|-------|-------------|
| BJJ | Technique-first jiu-jitsu: position, escapes, submissions |
| Judo | Throws, balance, grips, safe falling |

### Girls
| Class | Description |
|-------|-------------|
| BJJ | Technique, movement, confidence on the mats |
| Judo | Throws, grips, balance, breakfalls |

### Boys
| Class | Description |
|-------|-------------|
| Wrestling | Footwork, takedown basics, body control |
| Jiu-Jitsu | Position, escapes, beginner submissions |

---

## 5. Coaching Team

| Name | Role | Specialization |
|------|------|----------------|
| Dr. Amir Eslami | Head Coach | Wrestling & Jiu-Jitsu (Black Belt) |
| Khalid Ismail | Senior Coach | Wrestling & Jiu-Jitsu (Black Belt) |
| Shamol Miah | Coach | Jiu-Jitsu (Black Belt) |
| Mohammed Yahiaoui | Coach | Wrestling & Jiu-Jitsu (Purple Belt) |
| Ibraheem Miah | Coach | Jiu-Jitsu (Brown Belt) |

---

## 6. Site Architecture

```
Home
├── Hero (CTA: Book Free Trial)
├── Social Proof Bar (Google Rating, Student Count)
├── Why Legion (3-4 differentiators)
├── How It Works (3-Step Process)
├── Programs Bento Grid (individual classes):
│   ├── Men's Wrestling
│   ├── Men's MMA
│   ├── Men's BJJ (Gi)
│   ├── Men's No-Gi
│   ├── Women's BJJ
│   ├── Women's Judo
│   ├── Girls BJJ
│   ├── Girls Judo
│   ├── Boys Wrestling
│   └── Boys Jiu-Jitsu
├── Video Section (Training Footage / Gym Tour)
├── Meet the Team (Coaches)
├── Testimonials (Google Reviews)
├── FAQ Section
└── Location & Contact + Final CTA

About Us
├── Academy Story
├── Coaches
└── Facilities (new photos/videos)

Classes (Mega Menu)
├── Men → Wrestling, MMA, BJJ (Gi), No-Gi
├── Women → BJJ, Judo
├── Girls → BJJ, Judo
└── Boys → Wrestling, Jiu-Jitsu

Timetable (MindBody Widget)

Pricing (MindBody Widget - includes Free Trial option)

Blog (CMS-powered)

Contact
├── Location & Map
├── MindBody Chat Widget
└── Social Links
```

---

## 7. Primary Conversion Goal

| Goal | Mechanism |
|------|-----------|
| **Free Trial Booking** | CTAs link to MindBody Pricing widget (Free Trial is a pricing option) |

### CTA Strategy
- Header: "Start Training" button + **MindBody Login** + **Cart** buttons
- Hero: "Get Your Free Trial" button
- Sticky mobile CTA
- End of each class page

### 3-Step Onboarding Process (Front-Deskless Operation)

> [!IMPORTANT]
> Legion operates without a front desk. All payments are online via MindBody.

| Step | Action | Details |
|------|--------|--------|
| **1. Sign Up** | Book free trial via MindBody | Select "Free Trial" pricing option |
| **2. Book Class** | Choose a class from the schedule | Use the Timetable/MindBody widget |
| **3. Attend** | Arrive 15 minutes early | Coach welcomes new members personally |

**Support**: For any issues, use the MindBody chat widget.

### Post-Trial Conversion
After completing their free class, members are directed to the **Pricing page** to purchase a package via MindBody.

---

## 8. Technical Stack

| Component | Technology |
|-----------|------------|
| **Framework** | Next.js (App Router) |
| **Styling** | Tailwind CSS |
| **CMS** | Sanity.io or Payload CMS (headless, user-friendly) |
| **Payments/Booking** | MindBody Widgets (embedded) |
| **Reviews** | Google Reviews API or widget |
| **Hosting** | Vercel |
| **Analytics** | Google Analytics 4 + Google Search Console |

---

## 9. Design System

### Typography
| Element | Font | Weight |
|---------|------|--------|
| **Headings** | Roboto Slab | Bold (700) |
| **Body** | Inter or Source Sans Pro | Regular (400) |
| **Accents** | Roboto Slab | Medium (500) |

### Color Palette
| Role | Color |
|------|-------|
| **Background** | #000000 (Pure Black) |
| **Surface** | #0A0A0A (Near Black) |
| **Border** | #27272A (Zinc-800) |
| **Text Primary** | #FFFFFF |
| **Text Secondary** | #A1A1AA (Zinc-400) |
| **Accent** | #FFFFFF (White) |

### Aesthetic
- **Dark, sleek, premium** feel
- High contrast for readability
- Subtle animations (not flashy)
- Imagery: Action shots, training photos, coach portraits

---

## 10. SEO Strategy

### Target Keywords
| Category | Keywords |
|----------|----------|
| **Local** | BJJ East London, Wrestling gym Leyton, MMA classes Walthamstow |
| **Program** | Kids wrestling London, Women's judo classes, No-gi grappling |
| **Intent** | Free trial martial arts, Best BJJ gym London |

### Technical SEO
- Server-side rendering (Next.js)
- Structured data (LocalBusiness, SportsActivityLocation)
- Optimized meta tags per page
- Sitemap.xml + robots.txt
- Core Web Vitals optimization

---

## 11. Content Management (CMS)

### Blog Content Types
- News & announcements
- Competition results
- Student spotlights
- Technique tips

### Wiki/Resource Content Types *(Future)*
- Belt progression guides
- Competition rules
- Technique library

> [!NOTE]
> CMS must be user-friendly for non-technical content management.

---

## 12. Integrations

| Integration | Purpose |
|-------------|---------|
| **MindBody** | Schedule widget, booking, payments |
| **Google Reviews** | Display testimonials |
| **Google Maps** | Location embed |
| **Social Media** | Facebook, Instagram, YouTube links |

---

## 13. Mindbody Integration: User Flows

> [!IMPORTANT]
> All booking and payments are handled through Mindbody Branded Web Tools. The following flows must be seamless for both adults and kids.

### Backend Settings (Required)

| Setting | Location | Purpose |
|---------|----------|---------|
| **Family Sign Up Experience** | Settings → General Setup → Client Management | Enables "Add Family" button during registration |
| **Liability Waiver** | Settings → General Setup → Waiver | Auto-prompts users to sign before first booking |
| **Consumer Identity** | Must be enabled | Required for family accounts to work |

---

### Adult Sign-Up Flow

Adults signing up for themselves follow a straightforward path:

```
Website → Click "Book Class" / "Start Training"
    → Mindbody Login/Register prompt (in widget)
        → Create Account (email, password, verify)
            → Sign Liability Waiver
                → Select Class from Schedule
                    → Checkout (Free Trial or Membership)
                        → Confirmation email sent
```

**Key Points:**
- Single account = single profile
- Can book directly from Class List or Enrollment widgets
- Waiver signed once, stored permanently

---

### Kids/Parent Sign-Up Flow (Family Accounts)

Parents registering their children follow this workflow:

```
Website → Click "Book Kids Class" 
    → Mindbody Login/Register prompt
        → Parent Creates Account
            → "Add Family" button appears (if enabled)
                → Add Child 1 (name only)
                → + Add another → Child 2, Child 3...
                    → "Yes, create this family account"
                        → Parent signs waiver (for all children)
                            → Switch to Child 1 profile → Book class
                            → Switch to Child 2 profile → Book class
                                → Single checkout for all
                                    → Confirmation email to parent
```

**Key Points:**
- Parent = Primary account holder (single login)
- Children = Dependents (up to 50 per account)
- Each child has individual profile for attendance/progress tracking
- Children appear on class rosters under their own names
- Children **cannot** log in independently
- "Switch Account" feature lets parent toggle between child profiles

---

### Widget Configuration

| Widget Type | Use Case | Where to Embed |
|-------------|----------|----------------|
| **Class List Widget** | Drop-in classes with schedules | Class detail pages, Timetable |
| **Enrollment Widget** | Multi-session courses, camps | Term enrollment pages |
| **Registration Widget** | Account creation only | Optional standalone sign-up page |
| **Pricing Widget** | Memberships, packages, trials | Pricing page |

**Filtering for Kids Pages:**
- Each kids class page should have a Class List widget filtered to show only that class category
- Example: Boys Wrestling page → Filter by `Category: Wrestling` + `Age: <16`

---

### Family Discount Configuration

| Discount Type | Setup | Example |
|---------------|-------|---------|
| **Multi-child discount** | Mindbody → Discounts | "10% off each additional child" |
| **Family Membership** | Mindbody → Pricing Options | Single package covering multiple family members |
| **"Pays For" Relationship** | Client Relationships | Parent's payment method auto-used for children |

---

### Waiver & Consent for Minors

- **Liability Waiver**: Parent signs electronically for all dependents
- **Custom Client Forms**: Use for medical info, emergency contacts, photo consent
- **Auto-prompt**: Waivers appear during first booking—cannot proceed without signing

---

## 14. Pages Summary

| Page | Status | Priority |
|------|--------|----------|
| Home | New | P0 |
| About Us | New | P0 |
| Classes (all sub-pages) | New | P0 |
| Timetable | New (MindBody) | P0 |
| Pricing | New (MindBody) | P0 |
| Free Trial | New | P0 |
| Contact | New | P0 |
| Blog | New (CMS) | P1 |
| Individual Coach Pages | New | P1 |
| Privacy Policy | New | P2 |
| Terms & Conditions | New | P2 |

---

## 15. Success Metrics

| Metric | Target |
|--------|--------|
| **Free Trial Conversions** | Track via MindBody + GA4 |
| **Organic Traffic** | 50% increase in 6 months |
| **Page Load Speed** | <2s LCP |
| **Mobile Usability** | 100% mobile-friendly score |

---

## 16. Open Questions

1. ~~**Accent Color**: Do you prefer red, gold, or another color for buttons/accents?~~ ✅ **Monochrome (White accent on black)**
2. ~~**Tagline**: Any preferred tagline or should we brainstorm?~~ ✅ **"Train With Purpose."**
3. ~~**Photography**: Will new photos be provided, or should we plan for a photoshoot?~~ ✅ **Photos available**

---

*Last Updated: February 8, 2026*

---

## 17. Class Detail Page Content (Boys Wrestling Example)

### Hero Section
- **Main Headline**: Coordination. Resilience. Grit.
- **Sub-headline**: Give your child the Legion advantage. A high-energy, supportive environment where children build a physical foundation for life through our structured Youth Award system.
- **CTA**: CLAIM A FREE YOUTH TRIAL
- **Parent Note**: Manage your family, sign waivers, and book classes from one simple profile.

### Why Wrestling for Kids?
We believe Wrestling is the most effective vehicle for physical education. At Legion, we use the mats to teach the "Big Three" of youth development:
1. **Coordination**: Building the balance, body awareness, and functional strength that carries over into every other sport.
2. **Resilience**: Learning how to fall safely, stay calm under pressure, and get back up with confidence.
3. **Grit**: Developing the focus, discipline, and work ethic that leads to success in and out of the academy.

### The Youth Award Roadmap
We don’t believe in "random" play. Every child at Legion follows a visible, structured path of progression. Our syllabus is broken down into four major series, each containing a White, Solid, and Black award.

- **Grey Series (Foundation)**: Focus on movement, safety, and basic body control.
  - Grey White Award | Grey Award | Grey Black Award
- **Yellow Series (Fundamentals)**: Introduction to primary takedowns and control ties.
  - Yellow White Award | Yellow Award | Yellow Black Award
- **Orange Series (Transitions)**: Mastering escapes and positional dominance on the mat.
  - Orange White Award | Orange Award | Orange Black Award
- **Green Series (Performance)**: Advanced technical sequencing and competition-ready drilling.
  - Green White Award | Green Award | Green Black Award

**Grading**: Progress is earned through consistency and technical skill. To move to the next award, a student must complete the required training time and pass a formal Grading once the coach has assessed their proficiency.

### The Parent’s Starter Guide
We’ve made the admin simple so you can focus on your child’s training.

**1. Easy Registration & Arrival**
- **One-Profile Management**: Create one parent account and add all your children as dependents. Manage bookings and waivers from a single login.
- **No-Front-Desk Policy**: Please register, sign the digital waiver, and book online before arriving.
- **Check-In**: On arrival, head straight to the mat entrance. Coaches will check your child in via digital roster.

**2. What Your Child Needs**
- **Clothing**: Comfortable t-shirt and shorts/jogging bottoms (no zips, buttons, or pockets).
- **Footwear**: Bare feet or clean socks for trial. Wrestling boots required for long-term training.
- **Essentials**: Water bottle labeled with child’s name.

**3. Spectator Policy**
Parents are welcome to watch from our designated viewing area. We ask that you stay within this area to keep mat space clear and do not distract or intervene in the class.

### Live Youth Timetable
*(Integration: Mindbody API Filter - Category: Wrestling | Age: <16)*

### Common Questions
- **"Is it safe for my child?"** Safety is our priority. Grading ensures children only move to live wrestling after mastering falling and body control.
- **"How often should they train?"** We recommend twice per week for consistent progress.
- **"Can I watch the class?"** Yes, from the designated seating area.

---

## 18. Free Trial Landing Pages Content

> [!NOTE]
> Full page content with all sections, CTAs, and FAQs is maintained in [`data/legacy-content.md`](../data/legacy-content.md).

### Kids Free Trial Page

| Section | Purpose |
|---------|---------|
| Hero | Headline + CTA: "CREATE FAMILY ACCOUNT & BOOK FREE TRIAL" |
| The Legion Method | 3 pillars: Physical Literacy, Emotional Resilience, Structured Progress |
| Onboarding Journey | 4-step Mindbody sign-up: Create Parent Account → Add Children → Add Trial → Sign & Book |
| Trial to Member | Two paths: Pricing Page or Member Portal Shop |
| Youth Programs | Boys' Wrestling/BJJ, Girls' Judo/BJJ |
| FAQs | Safety, multiple kids booking, spectator policy, purchasing |
| Location & Arrival | Address + No Front Desk check-in instructions |

**Key Messaging:**
- Emphasize "Switch Account" for booking multiple children
- One waiver covers all dependents
- "+ Add another" for adding multiple kids at once

---

### Adult Free Trial Page

| Section | Purpose |
|---------|---------|
| Hero | Headline + CTA: "CREATE ACCOUNT & CLAIM YOUR FREE TRIAL" |
| Training Environments | Men's Sessions vs Ladies-Only (Closed Mat Policy) |
| Why Legion | Technicality, No-Ego Culture, Digital-First |
| 3-Step Onboarding | Create Account → Add Trial → Sign & Book |
| Trial to Member | Two paths: Pricing Page or Member Portal |
| Choose Your Path | Discipline selection (auto-filters by gender) |
| FAQs | Universal trial, gender filtering, no mixed classes |
| Location & Arrival | Address + 10-15 min early + no desk check-in |

**Key Messaging:**
- Auto-filter by gender after profile creation
- One universal trial credit for all adult sessions
- Waiver signed once, saved permanently

