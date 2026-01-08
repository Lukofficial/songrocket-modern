import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | SongRocket",
  description: "SongRocket Privacy Policy. Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="Privacy Policy"
          subtitle="Data protection statement"
        />

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-white/70 text-lg mb-6">
                With this <strong className="text-white">privacy statement</strong> we inform which personal data we process for what, how and where, especially in connection with our <strong className="text-white">songrocket.com</strong> website and our other services. We also use this privacy statement to inform you about the rights of individuals whose data we process.
              </p>

              <p className="text-white/70 mb-6">
                For individual or additional offers and services, special, supplementary or additional privacy statements and other legal documents such as general terms and conditions (GTC), terms of use or conditions of participation may apply.
              </p>

              <p className="text-white/70 mb-8">
                Our offer is subject to Swiss data protection law and any applicable foreign data protection law such as, in particular, that of the European Union (EU) with the General Data Protection Regulation (GDPR). The European Commission{" "}
                <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32000D0518" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">recognizes</a>{" "}
                that Swiss data protection law ensures adequate data protection.
              </p>

              {/* 1. Contact Details */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Contact details</h2>
              <p className="text-white/70 mb-4">
                Responsibility for the processing of personal data is:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 my-6">
                <p className="text-white font-bold">Lukas Branezac</p>
                <p className="text-white/70">CEO & Founder</p>
                <p className="text-white/70">Wildbachstrasse 19</p>
                <p className="text-white/70">8424 Embrach</p>
                <p className="text-white/70 mt-2">
                  <a href="mailto:hello@songrocket.com" className="text-[#FF6B35] hover:underline">hello@songrocket.com</a>
                </p>
              </div>
              <p className="text-white/70 mb-4">
                We point out if there are other persons responsible for the processing of personal data in individual cases.
              </p>

              {/* 2. Processing of Personal Data */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Processing of personal data</h2>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">2.1 Terms</h3>
              <p className="text-white/70 mb-4">
                <strong className="text-white">Personal data</strong> is any information that relates to an identified or identifiable individual. A <strong className="text-white">person concerned</strong> is a person about whom personal data are processed. <strong className="text-white">Processing</strong> includes <em>any</em> handling of personal data, <em>independent</em> of the means and procedures used, in particular the storage, disclosure, acquisition, collection, deletion, storage, modification, destruction and use of personal data.
              </p>
              <p className="text-white/70 mb-4">
                The <strong className="text-white">European Economic Area (EEA)</strong> comprises the European Union (EU) and the Principality of Liechtenstein, Iceland and Norway. The General Data Protection Regulation (GDPR) refers to the processing of personal data as the processing of personal data.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">2.2 Legal basis</h3>
              <p className="text-white/70 mb-4">
                We process personal data in accordance with Swiss data protection law such as, in particular, the{" "}
                <a href="https://www.admin.ch/opc/de/classified-compilation/19920153/index.html" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Federal Data Protection Act</a>{" "}
                (DPA) and the{" "}
                <a href="https://www.admin.ch/opc/de/classified-compilation/19930159/index.html" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Ordinance to the Federal Data Protection Act</a>{" "}
                (FDPA).
              </p>
              <p className="text-white/70 mb-4">
                We process - if and to the extent that the General Data Protection Regulation (DSGVO) is applicable - personal data in accordance with <em>at least</em> one of the following legal bases:
              </p>
              <ul className="text-white/70 space-y-3 mb-6 list-disc list-inside">
                <li>
                  <a href="https://steigerlegal.ch/dsgvo/dsgvo-6/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Art. 6 para. 1 lit. b DSGVO</a> for the necessary processing of personal data for the performance of a contract with the data subject as well as for the implementation of pre-contractual measures.
                </li>
                <li>
                  Art. 6 para. 1 lit. f DSGVO for the necessary processing of personal data to protect the legitimate interests of us or of third parties, unless the fundamental freedoms and rights and interests of the data subject prevail. Legitimate interests are in particular our interest in being able to provide our offer permanently, user-friendly, secure and reliable, as well as to be able to advertise for it if necessary, information security as well as protection against misuse and unauthorized use, the enforcement of our own legal claims and compliance with Swiss law.
                </li>
                <li>
                  Art. 6 para. 1 lit. c DSGVO for the necessary processing of personal data to comply with a legal obligation to which we are subject under any applicable law of Member States in the European Economic Area (EEA)
                </li>
                <li>
                  Art. 6 para. 1 lit. e DSGVO for the necessary processing of personal data for the performance of a task carried out in the public interest.
                </li>
                <li>
                  Art. 6 para 1 lit. a DSGVO for the processing of personal data with the consent of the data subject.
                </li>
                <li>
                  Art. 6 para 1 lit. d DSGVO for the necessary processing of personal data to protect vital interests of the data subject or another natural person.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">2.3 Type, scope and purpose</h3>
              <p className="text-white/70 mb-4">
                We process those personal data that are <strong className="text-white">required</strong> to provide our offer permanently, user-friendly, secure and reliable. Such personal data may fall into the categories of inventory and contact data, browser and device data, content data, meta or edge data and usage data, location data, sales data, contract data and payment data.
              </p>
              <p className="text-white/70 mb-4">
                We process personal data that is necessary to provide our services in a permanent, user-friendly, secure and reliable manner.
              </p>
              <p className="text-white/70 mb-4">
                We process personal data for the <strong className="text-white">period</strong> that is required for the respective purpose(s) or by law. Personal data whose processing is no longer required will be anonymized or deleted. Persons whose data we process have <em>in principle</em> a right to deletion.
              </p>
              <p className="text-white/70 mb-4">
                We process personal data <em>in principle</em> only after obtaining the consent of the data subject, unless the processing is permitted for other legal reasons, such as for the performance of a contract with the data subject and for corresponding pre-contractual measures, to safeguard our overriding legitimate interests, because the processing is evident from the circumstances, or after prior information.
              </p>
              <p className="text-white/70 mb-4">
                In this context, we process in particular information that a data subject provides to us <em>voluntarily and himself</em> when contacting us - for example, by mail, e-mail, contact form, social media or telephone - or when registering for a user account. We may store such information, for example, in an address book or with comparable tools. If you transmit personal data to us via third parties, you are obliged to ensure data protection vis-à-vis such third parties as well as to ensure the accuracy of such personal data.
              </p>
              <p className="text-white/70 mb-4">
                We also process personal data that we receive from third parties, obtain from publicly available sources or collect in the course of providing our services, if and to the extent that such processing is permitted for legal reasons.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">2.4 Processing of personal data by third parties, including abroad</h3>
              <p className="text-white/70 mb-4">
                We may have personal data processed by commissioned third parties or process it jointly with third parties as well as with the help of third parties or transmit it to third parties. Such third parties are in particular providers whose services we use. We also ensure appropriate data protection for such third parties.
              </p>
              <p className="text-white/70 mb-4">
                Such third parties are <em>in principle</em> located in Switzerland as well as in the European Economic Area (EEA). However, such third parties may also be located in other states and territories on Earth as well as elsewhere in the universe, provided that their data protection laws are compliant with the assessment of the Swiss Federal Data Protection and Information Commissioner (FDPIC) and - if and to the extent that the General Data Protection Regulation (GDPR) is applicable - with assessment of the European Commission - ensures adequate data protection, or if adequate data protection is ensured for other reasons, such as by a corresponding contractual agreement, in particular on the basis of standard contractual clauses, or by a corresponding certification. Exceptionally, such a third party may be located in a country without adequate data protection, provided that the requirements under data protection law, such as the explicit consent of the data subject, are met for this purpose.
              </p>

              {/* 3. Rights of Data Subjects */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Rights of Data Subjects</h2>
              <p className="text-white/70 mb-4">
                Data subjects whose personal data we process have rights under Swiss data protection law. These include the right to information as well as the right to rectification, deletion or blocking of the personal data processed.
              </p>
              <p className="text-white/70 mb-4">
                Data subjects whose personal data we process may - if and to the extent that the General Data Protection Regulation (GDPR) is applicable - obtain free of charge confirmation as to whether we are processing their personal data and, if so, request information about the processing of their personal data, have the processing of their personal data restricted, exercise their right to data portability, and have their personal data corrected, deleted ("right to be forgotten"), blocked, or completed.
              </p>
              <p className="text-white/70 mb-4">
                Data subjects whose personal data we process may - if and to the extent that the GDPR applies - revoke any consent they have given at any time with future effect and object to the processing of their personal data at any time.
              </p>
              <p className="text-white/70 mb-4">
                Data subjects whose personal data we process have a right of appeal to a competent supervisory authority. The supervisory authority for data protection in Switzerland is the{" "}
                <a href="https://www.edoeb.admin.ch/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Federal Data Protection and Information Commissioner</a>{" "}
                (FDPIC).
              </p>

              {/* 4. Data Security */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Data security</h2>
              <p className="text-white/70 mb-4">
                We take appropriate and suitable technical and organizational measures to ensure data protection and, in particular, data security. However, despite such measures, the processing of personal data on the Internet can always have security gaps. We can therefore not guarantee absolute data security.
              </p>
              <p className="text-white/70 mb-4">
                The access to our online offer takes place by means of transport encryption (SSL / TLS, in particular with the Hypertext Transfer Protocol Secure, abbreviated HTTPS). Most browsers mark transport encryption with a padlock in the address bar.
              </p>
              <p className="text-white/70 mb-4">
                Access to our online offering is subject - as is <em>basically</em> any Internet use - to mass surveillance without cause and without suspicion, as well as other monitoring by security authorities in Switzerland, the European Union (EU), the United States of America (USA) and other countries. We cannot directly influence the corresponding processing of personal data by secret services, police agencies and other security authorities.
              </p>

              {/* 5. Use of the Website */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Use of the website</h2>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">5.1 Cookies</h3>
              <p className="text-white/70 mb-4">
                We may use cookies for our website. Cookies - our own cookies (first-party cookies) as well as cookies from third parties whose services we use (third-party cookies or third-party cookies) - are data that are stored in your browser. Such stored data need not be limited to traditional cookies in text form. Cookies cannot run programs or transmit malware such as Trojans and viruses.
              </p>
              <p className="text-white/70 mb-4">
                Cookies may be stored in your browser temporarily as "session cookies" when you visit our website or for a certain period of time as so-called "permanent cookies". Session cookies are automatically deleted when you close your browser. Permanent cookies have a specific storage period. In particular, they allow us to recognize your browser the next time you visit our website and thus, for example, to measure the reach of our website. However, permanent cookies can also be used for online marketing, for example.
              </p>
              <p className="text-white/70 mb-4">
                You can disable cookies in your browser settings at any time in whole or in part, as well as delete them. Without cookies, our website may no longer be fully available. We actively request - if and where necessary - your express consent for the use of cookies.
              </p>
              <p className="text-white/70 mb-4">
                For cookies used for performance and reach measurement or for advertising, a general objection ("opt-out") is possible for numerous services via the{" "}
                <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Network Advertising Initiative</a>{" "}
                (NAI), YourAdChoices (Digital Advertising Alliance) or Your Online Choices (European Interactive Digital Advertising Alliance, EDAA).
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">5.2 Server logfiles</h3>
              <p className="text-white/70 mb-4">
                We may collect the following information for each access to our website, provided that this information is transmitted by your browser to our server infrastructure or can be determined by our web server: Date and time including time zone, Internet Protocol (IP) address, access status (HTTP status code), operating system including user interface and version, browser including language and version, individual sub-page of our website accessed including amount of data transferred, website last accessed in the same browser window (referer or referrer).
              </p>
              <p className="text-white/70 mb-4">
                We store such information, which may also constitute personal data, in server log files. The information is necessary to provide our online offer permanently, user-friendly and reliable, as well as to ensure data security and thus in particular the protection of personal data - also by third parties or with the help of third parties.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">5.3 Tracking pixels</h3>
              <p className="text-white/70 mb-4">
                We may use tracking pixels on our website. Tracking pixels are also referred to as web beacons. Tracking pixels - including those from third parties whose services we use - are small, usually invisible images that are automatically retrieved when you visit our website. Counting pixels can be used to collect the same information as server log files.
              </p>

              {/* 6. Notifications and Communications */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Notifications and communications</h2>
              <p className="text-white/70 mb-4">
                We send notifications and communications such as newsletters via email and other communication channels such as instant messaging.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">6.1 Success measurement and reach measurement</h3>
              <p className="text-white/70 mb-4">
                Notifications and communications may contain web links or tracking pixels that record whether an individual communication was opened and which web links were clicked. Such web links and tracking pixels may also track usage of notifications and communications on a personal basis. We need this statistical tracking of usage for performance and reach measurement in order to provide notifications and communications based on the needs and reading habits of recipients in an effective and user-friendly manner, as well as in a durable, secure and reliable manner.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">6.2 Consent and objection</h3>
              <p className="text-white/70 mb-4">
                You must <em>basically</em> expressly consent to the use of your e-mail address and other contact addresses, unless the use is permitted for other legal reasons. For any consent to receive e-mails, we use the "double opt-in" procedure whenever possible, which means that you will receive an e-mail with a web link that you must click to confirm, so that no misuse by unauthorized third parties can occur. We may log such consents including Internet Protocol (IP) address, date and time for evidence and security reasons.
              </p>
              <p className="text-white/70 mb-4">
                You may <em>basically</em> opt out of notifications and communications such as newsletters at any time. This is subject to notifications and communications that are absolutely necessary for our offer. By unsubscribing, you can in particular object to the statistical recording of usage for performance and reach measurement.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">6.3 Service providers for notifications and communications</h3>
              <p className="text-white/70 mb-4">
                We send notifications and communications via third-party services or with the help of service providers. Cookies may also be used in the process. We also ensure appropriate data protection for such services.
              </p>
              <p className="text-white/70 mb-4">
                We use in particular:
              </p>
              <ul className="text-white/70 space-y-2 mb-6 list-disc list-inside">
                <li>
                  <strong className="text-white"><a href="https://mailchimp.com/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Mailchimp</a>:</strong> Email marketing and communication platform; Provider: The Rocket Science Group LLC, USA; Information on data protection:{" "}
                  <a href="https://mailchimp.com/help/mailchimp-european-data-transfers/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">European Data Transfers</a>
                </li>
                <li>
                  <strong className="text-white"><a href="https://www.mailgun.com/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Mailgun</a>:</strong> Email delivery service; Provider: Mailgun Technologies Inc., USA; Information on data protection:{" "}
                  <a href="https://www.mailgun.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Privacy Policy</a>
                </li>
              </ul>

              {/* 7. Third-Party Services */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. Third-party services</h2>
              <p className="text-white/70 mb-4">
                We use services from third parties to provide our offer in a permanent, user-friendly, secure and reliable manner. Such services may also be used to embed content on our website. Such services - for example, hosting and storage services, video services and payment services - enable us to reach you in a targeted manner.
              </p>
              <p className="text-white/70 mb-4">
                We use in particular:
              </p>
              <ul className="text-white/70 space-y-3 mb-6 list-disc list-inside">
                <li>
                  <strong className="text-white"><a href="https://aws.amazon.com/de/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Amazon Web Services (AWS)</a>:</strong> Cloud infrastructure and hosting
                </li>
                <li>
                  <strong className="text-white"><a href="https://stripe.com/de-ch" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Stripe</a>:</strong> Payment processing
                </li>
                <li><strong className="text-white">PayPal:</strong> Payment processing</li>
                <li><strong className="text-white">Wise:</strong> Payout transfers to curators</li>
                <li>
                  <strong className="text-white">Spotify API:</strong> Music and playlist integration; Provider: Spotify AB, Sweden; Information on data protection:{" "}
                  <a href="https://www.spotify.com/de/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Privacy Center</a>,{" "}
                  <a href="https://www.spotify.com/de/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Privacy Policy</a>
                </li>
                <li><strong className="text-white">Tidio:</strong> Live chat support service</li>
              </ul>

              {/* 8. Social Media */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">8. Social Media</h2>
              <p className="text-white/70 mb-4">
                We may have a presence on social media platforms and other online platforms to communicate with interested parties and users and to provide information about our services. In doing so, personal data may also be processed outside Switzerland and the European Economic Area (EEA).
              </p>
              <p className="text-white/70 mb-4">
                The terms of use and data protection provisions of the respective operators of such online platforms also apply in each case. Unless otherwise stated in our privacy statement, we process the data of users if they communicate with us on social media platforms, for example, if they write posts on our social media pages or send us messages.
              </p>
              <p className="text-white/70 mb-4">
                We use the following social media platforms:
              </p>
              <ul className="text-white/70 space-y-3 mb-6 list-disc list-inside">
                <li>
                  <strong className="text-white">Facebook:</strong> Social network; Provider: Meta Platforms Ireland Limited, Ireland (for users in Switzerland and the EEA); Information on data protection:{" "}
                  <a href="https://www.facebook.com/about/privacy" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Privacy Policy</a>,{" "}
                  <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Controller Addendum</a>,{" "}
                  <a href="https://www.facebook.com/legal/terms/page_controller_addendum" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Page Controller Addendum</a>,{" "}
                  <a href="https://www.facebook.com/legal/terms/information_about_page_insights_data" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Page Insights Data</a>
                </li>
                <li>
                  <strong className="text-white">Instagram:</strong>{" "}
                  <a href="https://www.instagram.com/songrocket_" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">@songrocket_</a>; Provider: Meta Platforms Ireland Limited, Ireland; Information on data protection:{" "}
                  <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Privacy and Security</a>
                </li>
                <li>
                  <strong className="text-white">LinkedIn:</strong> Professional network; Provider: LinkedIn Ireland Unlimited Company, Ireland; Information on data protection:{" "}
                  <a href="https://www.linkedin.com/legal/privacy-policy?_l=de_CH" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Privacy Policy</a>,{" "}
                  <a href="https://www.linkedin.com/legal/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Cookie Policy</a>,{" "}
                  <a href="https://privacy.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Privacy Center</a>
                </li>
                <li>
                  <strong className="text-white">X (Twitter):</strong>{" "}
                  <a href="https://x.com/songrocket_" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">@songrocket_</a>; Provider: Twitter International Company, Ireland; Information on data protection:{" "}
                  <a href="https://help.twitter.com/de/safety-and-security/privacy-controls-for-tailored-ads" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Privacy Controls</a>
                </li>
                <li>
                  <strong className="text-white">SoundCloud:</strong>{" "}
                  <a href="https://soundcloud.com/songrocket" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">SongRocket</a>
                </li>
                <li>
                  <strong className="text-white">Spotify:</strong>{" "}
                  <a href="https://open.spotify.com/user/lukofficial?si=6Q3Cdj60Sem0WcC6JqSCCQ" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">SongRocket Profile</a>
                </li>
              </ul>

              {/* 9. Extensions for the website */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">9. Extensions for the website</h2>
              <p className="text-white/70 mb-4">
                We use extensions for our website in order to be able to use additional functions. Such extensions allow, for example, the integration of content such as videos or fonts.
              </p>
              <p className="text-white/70 mb-4">
                Such extensions require that the providers of the respective extensions process the IP address of the users. Without this IP address, the providers cannot send the content to the respective browser. The IP address is therefore required for the display of such content.
              </p>
              <p className="text-white/70 mb-4">
                We endeavor to use only those extensions whose respective providers only process the IP address for the purpose of delivering the content. However, we have no influence on whether third-party providers store the IP address, for example for statistical purposes.
              </p>
              <p className="text-white/70 mb-4">
                We use in particular:
              </p>
              <ul className="text-white/70 space-y-3 mb-6 list-disc list-inside">
                <li>
                  <strong className="text-white">Google Fonts:</strong> Fonts for the website design; Provider: Google LLC, USA; Information on data protection:{" "}
                  <a href="https://developers.google.com/fonts/faq#what_does_using_the_google_fonts_api_mean_for_the_privacy_of_my_users" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">FAQ</a>,{" "}
                  <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <strong className="text-white">Font Awesome:</strong> Icons for the user interface; Provider: Fonticons Inc., USA; Information on data protection:{" "}
                  <a href="https://fontawesome.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Privacy Policy</a>
                </li>
              </ul>

              {/* 10. Success and reach measurement */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">10. Success and reach measurement</h2>
              <p className="text-white/70 mb-4">
                We may use services and programs to determine how our online offering is used. In this context, we may, for example, measure the success and reach of our online offerings and the impact and reach of links on third-party websites. We can also test and compare, for example, how different versions or designs of our online offer are used ("A/B testing").
              </p>
              <p className="text-white/70 mb-4">
                Based on the results of success and reach measurement, errors can be corrected, popular content strengthened or improvements made to our online offering. When using the services and programs for success and reach measurement, the IP addresses of individual users must be stored. In principle, IP addresses are truncated in order to follow the principle of data economy and thus improve the data protection of users ("IP masking").
              </p>
              <p className="text-white/70 mb-4">
                When using services and programs for success and reach measurement, cookies may be used and user profiles may be created. User profiles include, for example, the pages visited or the content viewed on our website, information about the size of the screen or browser window and the - at least approximate - location. In principle, user profiles are created exclusively in pseudonymized form. We do not use user profiles for identifying individual users. Individual services of third parties with which users are registered may assign use of our online offerings to the user account or user profile of the respective service.
              </p>
              <p className="text-white/70 mb-4">
                We use in particular:
              </p>
              <ul className="text-white/70 space-y-3 mb-6 list-disc list-inside">
                <li>
                  <strong className="text-white">Google Analytics:</strong> Success and reach measurement; Provider: Google LLC, USA / Google Ireland Limited, Ireland; Information:{" "}
                  <a href="https://www.blog.google/around-the-globe/google-europe/some-changes-our-service-model-europe/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Service Model Europe</a>,{" "}
                  <a href="https://safety.google/principles/?hl=de" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Safety Principles</a>,{" "}
                  <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Privacy Policy</a>,{" "}
                  <a href="https://policies.google.com/technologies/cookies?hl=de" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Cookie Policy</a>; Opt-out:{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Browser Add-on</a>
                </li>
                <li>
                  <strong className="text-white"><a href="https://matomo.org/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Matomo</a>:</strong> Open source web analytics (self-hosted)
                </li>
              </ul>

              {/* 11. Advertising */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">11. Advertising</h2>
              <p className="text-white/70 mb-4">
                We may use third-party services to display targeted and interest-based advertising to users. For this purpose, cookies may be used and user profiles may be created. User profiles include, for example, the ads viewed or the content viewed on our website, information about the size of the screen or browser window, and the - at least approximate - location.
              </p>
              <p className="text-white/70 mb-4">
                We may also use remarketing to display targeted advertising to users who have already visited our website. Such advertising may be displayed on third-party websites and platforms.
              </p>
              <p className="text-white/70 mb-4">
                We use in particular:
              </p>
              <ul className="text-white/70 space-y-3 mb-6 list-disc list-inside">
                <li>
                  <strong className="text-white">Google Ads:</strong> Advertising and remarketing; Provider: Google LLC, USA / Google Ireland Limited, Ireland; Information:{" "}
                  <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Privacy Policy</a>,{" "}
                  <a href="https://policies.google.com/technologies/cookies?hl=de" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Cookie Policy</a>; Opt-out:{" "}
                  <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Ads Settings</a>
                </li>
                <li>
                  <strong className="text-white">Meta Ads (Facebook/Instagram):</strong> Social media advertising; Provider: Meta Platforms Ireland Limited, Ireland; Information:{" "}
                  <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Privacy Policy</a>; Opt-out:{" "}
                  <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Ad Preferences</a>,{" "}
                  <a href="https://www.instagram.com/accounts/access_tool/ads_interests" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Instagram Ads Interests</a>
                </li>
              </ul>

              {/* 12. Final provisions */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">12. Final provisions</h2>
              <p className="text-white/70 mb-4">
                We may amend and supplement this privacy statement at any time. We will inform about such amendments and supplements in an appropriate form, in particular by publishing the current privacy statement on our website.
              </p>
              <p className="text-white/70 mb-4">
                This privacy statement was created with the privacy generator of{" "}
                <a href="https://datenschutzpartner.ch/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">Datenschutzpartner</a>.
              </p>
              <p className="text-white/70 mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us at:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 my-6">
                <p className="text-white/70">
                  Email: <a href="mailto:hello@songrocket.com" className="text-[#FF6B35] hover:underline">hello@songrocket.com</a>
                </p>
                <p className="text-white/70">
                  Support: <a href="mailto:support@songrocket.com" className="text-[#FF6B35] hover:underline">support@songrocket.com</a>
                </p>
              </div>

              <div className="border-t border-white/10 mt-12 pt-8">
                <p className="text-white/50 text-sm">
                  SongRocket is an independently owned and operated business and is not affiliated in any way with Spotify. Registered in Switzerland, company reg no. CHE-137.124.111
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
