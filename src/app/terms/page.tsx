import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service | SongRocket",
  description: "SongRocket Terms of Use. Read our terms and conditions for using the SongRocket platform.",
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0e0c0c] min-h-screen">
        <PageHeader
          title="Website Terms of Use"
          subtitle="SongRocket Terms of Use"
        />

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-invert prose-lg max-w-none">

              <p className="text-white/70 mb-8">
                <strong className="text-white">Effective as of March 23. 2020 last update: March 23. 2020</strong>
              </p>

              {/* Table of Contents */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
                <ol className="text-white/70 space-y-2">
                  <li>1 Introduction</li>
                  <li>2 Definitions</li>
                  <li>3 Changes to the Agreements</li>
                  <li>3 Having fun with SongRocket</li>
                  <li className="italic">4 Accounts and Registration</li>
                  <li className="italic">5 DISCLAIMERS, LIMITS OF LIABILITY AND INDEMNITIES. PROHIBITIONS</li>
                  <li className="italic">6 Funding, Accounting, Payouts, Refund, Purchases</li>
                  <li className="italic">7 Modification of the terms of use</li>
                  <li className="italic">8 Refunds</li>
                  <li className="italic">9 Coupon or Promotional Code</li>
                  <li className="italic">10 Guarantee & warranty</li>
                  <li className="italic">11 Copyright and Trade Mark Notices</li>
                  <li className="italic">12 Songrocket content ownership and use</li>
                  <li className="italic">13 Third Party Applications and Devices</li>
                  <li className="italic">14 Litigation</li>
                  <li className="italic">15 Customer support</li>
                </ol>
              </div>

              <p className="text-white/70 mb-8">
                Hi to SongRocket Terms and Conditions of Use (Terms). The Terms you see below are important because they:
              </p>
              <ul className="text-white/70 space-y-2 mb-8 list-disc list-inside">
                <li>Outline your legal rights on SongRocket</li>
                <li>Explain the rights you give to us when you use SongRocket</li>
                <li>Describe the rules everyone needs to follow when using SongRocket</li>
              </ul>
              <p className="text-white/70 mb-8">
                Please read these Terms, our <a href="https://songrocket.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline font-bold">Privacy Policy</a> and any other terms referenced in this document carefully.
              </p>

              {/* 1 Introduction */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4 italic">1 Introduction</h2>
              <p className="text-white/70 mb-4">
                Great to see you! SongRocket (SongRocket, we, us, our). SongRocket provides independent artists a chance within the platform getting feedback on already released and unreleased Songs to Music Influencer (Playlist Curators) to get heard and be globally within successful playlists of curators. The Music Influencers is playing an important role in the industry, also called playlist curators provides the ability to earn money by reviewing new and existing artists Songs in the music industry. For SongRocket (SongRocket, we, us, our). Its important the communication between those sharing music and those receiving music. We will do our best to ensure that this communication takes place as smoothly as possible. We cannot, however, be held responsible for the actions of those using this service.
              </p>
              <p className="text-white/70 mb-4">
                We have a support section where we track back any issue with a review or any communication problem. If there is a communication issue or a curator is not reviewing the tracks, Songrocket has the rights to ban certain curator if they dont follow the process and acting as agreed on our terms. Same goes with Artists. Songrocket isnt accountable to take any further action though besides taking accounts down from the platform.
              </p>
              <p className="text-white/70 mb-4">
                We respect the privacy and security of our users. You understand that by using our service, you give consent to the collection, use and disclosure of your personally identifiable information as well as any non-personally identifiable information,
              </p>
              <p className="text-white/70 mb-4">
                You agree that you are over 18 years old, otherwise you represent and agree you possess the legal consent of your parent or of a legal representative to access and use the SongRocket Service and binding contract. We use different account for different user. Affiliate, Curator and Artist or a combined Account as Artist and Curator. Therefore you are an authorized representative of your company with the authority to bind the entity to these Terms of Service, and that you agree to these Terms on your companys behalf. By singing up with Soundcloud or Spotify (a third-party service) you give us permission to access and use your information from that service as permitted by that third-party service, and to store your authentication credentials for that third-party service. The service is not available to any User who has been removed by Company. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times.
              </p>
              <p className="text-white/70 mb-4">
                By signing up of our services, including all associated features and functionalities, websites and user interfaces, as well as all content and software applications associated with our services (collectively, the SongRocket or Service), or accessing any music, videos or other content or material that is made available through the Service (the Content) you are entering into a binding contract with SongRockets.
              </p>

              {/* 2 Definitions */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4 italic">2 Definitions</h2>
              <p className="text-white/70 mb-2"><strong className="text-white italic">We, Company:</strong> SongRocket, Switzerland.</p>
              <p className="text-white/70 mb-2"><strong className="text-white italic">Digital Service Providers:</strong> Spotify only.</p>
              <p className="text-white/70 mb-2"><strong className="text-white italic">Use of your account:</strong> We define use as the point from which you log into your account as an Artist, Curator or Affiliate.</p>
              <p className="text-white/70 mb-2"><strong className="text-white italic">Partner:</strong> This includes technical service providers, aggregators, credit card companies transfer companies,</p>
              <p className="text-white/70 mb-4"><strong className="text-white italic">Services:</strong> These refer to the services available to you from our platform.(campaigns for example)</p>

              {/* 3 Changes to the Agreements */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4 italic">3 Changes to the Agreements</h2>
              <p className="text-white/70 mb-4">
                We may make changes every now or then to the Agreements. When we make changes to the Agreements, well NOT provide you with notice. Any major changes will be communicated via Email. Please therefore make sure you read updates carefully we will always update the date when any changes are made on the top of this page. Also you may check our terms regularly.
              </p>
              <p className="text-white/70 mb-4">
                If you do not wish to continue using the Service under the new updated version of the Agreements, you may terminate your account by the section delete account.
              </p>

              {/* 3 Having fun with Songrocket */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4 italic">3 Having fun with Songrocket</h2>
              <p className="text-white/70 mb-4">
                Heres some information about the ways you can fully enjoy Songrocket.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3 italic">3.1 Service Options</h3>
              <p className="text-white/70 mb-4">
                You can find a description of our Service options on our website, and we will explain which Service options are available to you. We are not responsible for the products and services provided by such third parties. We reserve the right to modify, terminate or otherwise amend and promotional offerings at any time in accordance with these Terms.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3 italic">3.2 Curators</h3>
              <p className="text-white/70 mb-4">
                (Music Influencer) such as Independent Curators or Curators from Music Labels
              </p>
              <p className="text-white/70 mb-4">
                Curators have a board where they review the songs they receive, the have can also check their playlists and activity, as well as amending any playlist with the tracks the accepted to add or remove by the position they have placed. Also have a revenue board to cash out.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3 italic">3.3 Artist</h3>
              <p className="text-white/70 mb-4">
                by its own or (can also be curators acting as an Artist, Management of the Artist or PR Agency)
              </p>
              <p className="text-white/70 mb-4">
                This users are able to run campaigns, add their own tracks (Released) providing the information on the form to fill in (this section).
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3 italic">3.4 Affiliate Partner (pending not available yet)</h3>
              <p className="text-white/70 mb-4">
                Affiliate programs allows people who just want to provide Curators or Artist to get on board and earn from the Campaigns they start to run. This will give people the chance to act total independently to us which will help us grow our platform.
              </p>

              {/* 4 Accounts and Registration */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4 italic">4 Accounts and Registration</h2>
              <p className="text-white/70 mb-4">
                once you are registered and participate our service you agree on our terms and also as mentioned bellow.
              </p>
              <p className="text-white/70 mb-4">
                You are over 18 years old, otherwise you represent and agree you possess the legal consent of your parent or of a legal representative to access and use the SongRocket Service and binding contract.
              </p>
              <p className="text-white/70 mb-4">
                Any transactions payments made to our platform to use either the service or do payout of earnings, we are not responsible for any loses due a bankrupt or event such as pandemic or any other event in country and worldwide. Also its Companys or user responsibility using correct information. Faulty Information can cause payout issues which we are not responsible for. Any order placed are non-cancelable.
              </p>
              <p className="text-white/70 mb-4">
                You agree being contacted via Email through us to you as a company, label, artist, affiliate partner
              </p>
              <p className="text-white/70 mb-4">
                You agree to check your account, messages you wrote campaigns and any activities on our platform.
              </p>
              <p className="text-white/70 mb-4">
                Any Information Profiles you provide to us is always updated and accurate. Its your responsibility to have everything up to date.
              </p>
              <p className="text-white/70 mb-4">
                You should not borrow or take any loan to run campaigns, we do not guarantee a full success of your campaign. Remember this is a platform to get feedback reviews on your or representative tracks and the chance to be on Music Influencers Curators playlists and NOT a guarantee to be on playlists.
              </p>
              <p className="text-white/70 mb-4">
                You granting SongRocket to use your track (only if available on socials already) to add on our social media accounts to give it a buzz for campaigns we think deserve a push such platforms as Instagram (reels), Twitter or TikTok.
              </p>
              <p className="text-white/70 mb-4">
                You granting permission access information visualising your track and information provided by you on the section of the campaign for reviews. Any content you provide you agree you have the full rights to the content or a license to use so. Any copyright issue we received from owner we will provide information to them and be just taken down from our platform without further action. Its your responsibility to have the full rights of any information you provide.
              </p>

              {/* 5 DISCLAIMERS */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4 italic">5 DISCLAIMERS, LIMITS OF LIABILITY AND INDEMNITIES. PROHIBITIONS</h2>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-4">
                  <strong className="text-white">a. CUSTOMER ACKNOWLEDGEMENT</strong> YOU ACKNOWLEDGE AND AGREE THAT:
                </p>
                <p className="text-white/70 mb-2">
                  (i) ALL USE OF THE WEBSITE PROVIDED BY US IS AT YOUR OWN RISK;
                </p>
                <p className="text-white/70 mb-2">
                  (ii) THE WEBSITE MAY CONTAIN LINKS TO OTHER WEBSITES, WHICH ARE PROVIDED SOLELY AS A CONVENIENCE TO YOU AND THE INCLUSION OF ANY SUCH LINK DOES NOT IMPLY ENDORSEMENT, INVESTIGATION OR VERIFICATION BY US OF SUCH WEBSITES OR THE INFORMATION CONTAINED THEREIN; AND
                </p>
                <p className="text-white/70">
                  (iii) THE WEBSITE PROVIDED UNDER THESE TERMS AND CONDITIONS IS PROVIDED ON AN AS IS AND AS AVAILABLE BASIS.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 my-6">
                <p className="text-white/70">
                  <strong className="text-white">b. DISCLAIMER OF WARRANTIES</strong> WE MAKE NO CONDITIONS, WARRANTIES OR REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, USABILITY, SECURITY, QUALITY, CAPACITY, PERFORMANCE, AVAILABILITY, TIMELINESS OR ACCURACY OF THE WEBSITE OR ANY OTHER PRODUCTS SUPPLIED UNDER THESE TERMS AND CONDITIONS. WE EXPRESSLY DISCLAIM ALL CONDITIONS, WARRANTIES AND REPRESENTATIONS, EXPRESS, IMPLIED OR STATUTORY, INCLUDING IMPLIED CONDITIONS OR WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, DURABILITY, TITLE AND NON-INFRINGEMENT, WHETHER ARISING BY USAGE OF TRADE, BY COURSE OF DEALING, BY COURSE OF PERFORMANCE, AT LAW, IN EQUITY, BY STATUTE OR OTHERWISE HOWSOEVER.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 my-6">
                <p className="text-white/70">
                  <strong className="text-white">c. NO LIABILITY</strong> NOTWITHSTANDING ANY OTHER PROVISION OF THESE TERMS AND CONDITIONS, IN NO EVENT WILL WE, OUR AFFILIATES, CUSTOMER, CURATORS OR OUR CONTROLLING PARTIES, AGENTS, EMPLOYEES, SUPPLIERS, RESELLERS AND DISTRIBUTORS (COLLECTIVELY, IN THESE CAPITALIZED SECTIONS, WE OR US) BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY OTHER DAMAGES OR LOSSES WHATSOEVER, INCLUDING DAMAGES FOR LOSS OF PROFITS, GOODWILL, OPPORTUNITY, EARNINGS, USE OR DATA, ARISING DIRECTLY OR INDIRECTLY FROM OR RELATED TO THESE TERMS AND CONDITIONS OR THE USE, OR NON-USE OF THE WEBSITE OR ANY SOFTWARE, REGARDLESS OF THE CAUSE OF ACTION AND EVEN IF ONE OR MORE OF US HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR LOSSES, INCLUDING DAMAGES OR LOSSES ARISING FROM OR IN ANY WAY RELATED TO THE FOLLOWING: (i) ANY LOSS OR DAMAGE TO DATA ARISING DIRECTLY OR INDIRECTLY OUT OF USE OR NON-USE OF THE WEBSITE OR RELATED COMPONENT; (ii) DELAYS, ERRORS, INTERRUPTIONS, MISTAKES, OMISSIONS, NON-DELIVERY, INCORRECT DELIVERY, OR DEFECTS ON OR RELATED TO THE WEBSITE. WITHOUT RESTRICTING THE FOREGOING, IF CIRCUMSTANCES ARISE IN WHICH YOU OR ANOTHER PARTY IS ENTITLED TO RECOVER DAMAGES FROM ONE OR MORE OF US, THE AGGREGATE LIABILITY OF US FOR DAMAGES IS LIMITED TO THE AMOUNT PAID TO US BY YOU THROUGH THE WEBSITE DURING THE SIX-MONTH PERIOD PRECEDING THE CIRCUMSTANCES IN WHICH SUCH LIABILITY ARISES.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 my-6">
                <p className="text-white/70">
                  <strong className="text-white">1. APPLICABILITY</strong> SOME JURISDICTIONS PROHIBIT THE DISCLAIMER OF CERTAIN WARRANTIES OR CONDITIONS OR THE LIMITATION OF CERTAIN TYPES OF LIABILITY. IN SUCH CIRCUMSTANCES, TO THE EXTENT THAT SUCH PROHIBITIONS PROHIBIT ANY EXCLUSIONS AND LIMITATIONS IN THESE TERMS AND CONDITIONS, SUCH EXCLUSIONS AND LIMITATIONS WILL NOT APPLY TO YOU STRICTLY TO THE EXTENT NECESSARY TO MAKE THESE TERMS AND CONDITIONS CONSISTENT WITH SUCH PROHIBITIONS.
                </p>
              </div>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">ERRORS AND DELAYS</h3>
              <p className="text-white/70 mb-4">
                Company is not responsible for any errors or delays caused by an incorrect e-mail address provided by you or other technical problems beyond our reasonable control.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">PROHIBITIONS</h3>
              <p className="text-white/70 mb-4">
                You may use the Website only for the intended purposes and in accordance with these Terms and Conditions. You agree not to use the Website:
              </p>
              <ul className="text-white/70 space-y-2 mb-4 list-disc list-inside">
                <li>In any way that violates any applicable federal, state, local or international law or regulation (including, without limitation, any laws regarding the export of data or software to and from Switzerland to other countries).</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material, including any junk mail, chain letter or spam or any other similar solicitation.</li>
                <li>To impersonate or attempt to impersonate Declutter, a Comp Declutter any employee, another user or any other person or entity (including, without limitation, by using e-mail addresses associated with any of the foregoing).</li>
                <li>To engage in any other conduct that restricts or inhibits anyones use or enjoyment of the Website, or which, as determined by us, may harm Declutter or users of the Website or expose them to liability.</li>
              </ul>
              <p className="text-white/70 mb-4">Additionally, you agree not to:</p>
              <ul className="text-white/70 space-y-2 mb-4 list-disc list-inside">
                <li>Use the Website in any manner that could disable, overburden, damage, or impair the site or interfere with any other partys use of the Website, including their ability to engage in real time activities through the Website.</li>
                <li>Use any robot, spider or other automatic device, process or means to access the Website for any purpose, including monitoring or copying any of the material on the Website.</li>
                <li>Use any manual process to monitor or copy any of the material on the Website or for any other unauthorised purpose without our prior written consent.</li>
                <li>Use any device, software or routine that interferes with the proper working of the Website. Introduce any viruses, trojan horses, worms, logic bombs or other material which is malicious or technologically harmful.</li>
                <li>Attempt to gain unauthorised access to, interfere with, damage or disrupt any parts of the Website, the server on which the Website is stored, or any server, computer or database connected to the Website.</li>
                <li>Attack the Website via a denial-of-service attack or a distributed denial-of-service attack.</li>
                <li>Otherwise attempt to interfere with the proper working of the Website.</li>
                <li>copy paste function in writing reviews.</li>
              </ul>

              {/* 6 Funding */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4 italic">6 Funding, Accounting, Payouts, Refund, Purchases</h2>
              <ul className="text-white/70 space-y-2 mb-4 list-disc list-inside">
                <li>Process payments through credit card or Paypal.</li>
                <li>Once a payout has been initiated, payments will be made within 1-3 days via Wise.</li>
                <li>Only revenue which has been received by campaigns will be paid out.</li>
                <li>We reserve the right to deduct costs.</li>
                <li>You can initiate the payouts yourself. It will go through after approval from SongRocket.</li>
                <li>All Payment transfer costs will be charged to you.</li>
                <li>Payout will be start from min. 20 USD max. 12000 USD.</li>
                <li>Curator account may be set to inactive if its not used.</li>
              </ul>

              {/* 7 Modification of the terms of use */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4 italic">7 Modification of the terms of use</h2>
              <p className="text-white/70 mb-4">
                We reserve the right to modify these Terms of Use at any time. We will post the most current version of these Terms of Use on our website. By continuing to use the SongRocket Service after any changes come into effect, you agree to the revised Terms. If you do not agree to the new Terms, you should stop using the Service and terminate your account.
              </p>

              {/* 8 Refunds */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4 italic">8 Refunds</h2>
              <p className="text-white/70 mb-4">
                All payments made to SongRocket are non-refundable. Once a campaign has been launched and curators have started reviewing your submission, no refunds will be issued. If you experience technical issues preventing you from using the service, please contact our support team within 24 hours of your purchase.
              </p>
              <p className="text-white/70 mb-4">
                In exceptional circumstances, refund requests may be considered at the sole discretion of SongRocket. Any approved refunds may be subject to processing fees.
              </p>

              {/* 9 Coupon or Promotional Code */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4 italic">9 Coupon or Promotional Code</h2>
              <p className="text-white/70 mb-4">
                From time to time, SongRocket may offer promotional codes or coupons. These codes are subject to the following conditions:
              </p>
              <ul className="text-white/70 space-y-2 mb-4 list-disc list-inside">
                <li>Promotional codes may only be used once per account unless otherwise specified.</li>
                <li>Codes cannot be combined with other offers or promotions.</li>
                <li>We reserve the right to cancel or modify promotions at any time without notice.</li>
                <li>Promotional codes have no cash value and are non-transferable.</li>
                <li>Misuse of promotional codes may result in account suspension.</li>
              </ul>

              {/* 10 Guarantee & warranty */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4 italic">10 Guarantee & warranty</h2>
              <p className="text-white/70 mb-4">
                SongRocket does not guarantee playlist placement or any specific number of streams, followers, or other metrics. We provide a platform for artists to submit their music to curators for review. The decision to add a track to a playlist is entirely at the discretion of each individual curator.
              </p>
              <p className="text-white/70 mb-4">
                We do not warrant that the Service will be uninterrupted, error-free, or that defects will be corrected. We make no warranties, express or implied, regarding the reliability, accuracy, or completeness of any content provided through the Service.
              </p>

              {/* 11 Copyright and Trade Mark Notices */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4 italic">11 Copyright and Trade Mark Notices</h2>
              <p className="text-white/70 mb-4">
                All content included on the SongRocket website, such as text, graphics, logos, button icons, images, audio clips, and software, is the property of SongRocket or its content suppliers and is protected by Swiss and international copyright laws.
              </p>
              <p className="text-white/70 mb-4">
                The SongRocket name and logo are trademarks of SongRocket. All other trademarks not owned by SongRocket that appear on this site are the property of their respective owners.
              </p>

              {/* 12 Songrocket content ownership and use */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4 italic">12 Songrocket content ownership and use</h2>
              <p className="text-white/70 mb-4">
                You retain ownership of any music or content you submit to SongRocket. By submitting content, you grant SongRocket a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content solely for the purpose of operating and promoting the Service.
              </p>
              <p className="text-white/70 mb-4">
                You represent and warrant that you own or have the necessary rights to any content you submit, and that your content does not infringe upon the intellectual property rights of any third party.
              </p>

              {/* 13 Third Party Applications and Devices */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4 italic">13 Third Party Applications and Devices</h2>
              <p className="text-white/70 mb-4">
                The SongRocket Service may integrate with third-party applications, websites, and services (Third Party Applications). Your use of Third Party Applications is subject to their respective terms and privacy policies. SongRocket is not responsible for the practices of any Third Party Applications.
              </p>
              <p className="text-white/70 mb-4">
                You acknowledge that Spotify and other streaming platforms have their own terms of service that you must comply with when using our Service.
              </p>

              {/* 14 Litigation */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4 italic">14 Litigation</h2>
              <p className="text-white/70 mb-4">
                These Terms of Use shall be governed by and construed in accordance with the laws of Switzerland, without regard to its conflict of law provisions. Any dispute arising from or relating to these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts located in Switzerland.
              </p>
              <p className="text-white/70 mb-4">
                Before initiating any legal action, you agree to first attempt to resolve any dispute informally by contacting SongRocket at support@songrocket.com.
              </p>

              {/* 15 Customer support */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-4 italic">15 Customer support</h2>
              <p className="text-white/70 mb-4">
                For any questions, concerns, or issues related to the SongRocket Service, please contact our customer support team:
              </p>
              <ul className="text-white/70 space-y-2 mb-4 list-disc list-inside">
                <li>Email: support@songrocket.com</li>
                <li>For curators: curators@songrocket.com</li>
                <li>Live chat available on our website</li>
              </ul>
              <p className="text-white/70 mb-4">
                We aim to respond to all inquiries within 24-48 business hours.
              </p>

              {/* Footer note */}
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
