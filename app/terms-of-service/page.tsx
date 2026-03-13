// You can use a dedicated layout component here if you have one,
// for consistency with your site's header and footer.
export const TermsOfService = () => {
  return (
    <div className='container mx-auto px-4 py-8 max-w-4xl'>
      <h1 className='text-3xl md:text-4xl font-extrabold mb-6 text-gray-400'>
        Terms Of Service
      </h1>

      <p className='text-sm text-gray-500 mb-6'>
        Last updated November 15, 2025
      </p>

      {/* --- Introduction/Contact --- */}
      <section className='space-y-4 text-gray-400 mb-8'>
        <p>
          We are Zyphr ("**Company**," "**we**" "**us**," "**our**") , a company
          registered in Germany at Steinweg 19, Braunschweig, Lower Saxony
          38100. We operate the mobile application Zyphr (the "**App**") , as
          well as any other related products and services that refer or link to
          these legal terms (the "**Legal Terms**") (collectively, the
          "**Services**") .
        </p>
        <p>
          You can contact us by phone at **+491712232218** , email at{" "}
          <a
            href='mailto:zyphrapp@proton.me'
            className='text-blue-600 hover:text-blue-800 font-medium'
          >
            zyphrapp@proton.me
          </a>{" "}
          , or by mail to Steinweg 19, Braunschweig, Lower Saxony 38100,
          Germany.
        </p>
        <p>
          These Legal Terms constitute a legally binding agreement made between
          you, whether personally or on behalf of an entity ("**you**"), and
          Zyphr, concerning your access to and use of the Services. You agree
          that by accessing the Services, you have read, understood, and agreed
          to be bound by all of these Legal Terms.
        </p>

        <blockquote className='border-l-4 border-red-500 p-4 font-bold my-4 rounded-md'>
          <p>
            IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
            EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
            DISCONTINUE USE IMMEDIATELY.
          </p>
        </blockquote>

        <p>
          We will provide you with prior notice of any scheduled changes to the
          Services you are using. The modified Legal Terms will become effective
          upon posting or notifying you by{" "}
          <a
            href='mailto:zyphrapp@proton.me'
            className='text-blue-600 hover:text-blue-800 font-medium'
          >
            zyphrapp@proton.me
          </a>
          , as stated in the email message. By continuing to use the Services
          after the effective date of any changes, you agree to be bound by the
          modified terms.
        </p>
        <p>
          The Services are intended for users who are at least 18 years old.
          Persons under the age of 18 are not permitted to use or register for
          the Services. We recommend that you print a copy of these Legal Terms
          for your records.
        </p>
      </section>

      {/* --- Section 1: OUR SERVICES --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='our-services'
      >
        1. OUR SERVICES
      </h2>
      <section className='space-y-4 text-gray-400'>
        <p>
          The information provided when using the Services is not intended for
          distribution to or use by any person or entity in any jurisdiction or
          country where such distribution or use would be contrary to law or
          regulation or which would subject us to any registration requirement
          within such jurisdiction or country. Accordingly, those persons who
          choose to access the Services from other locations do so on their own
          initiative and are solely responsible for compliance with local laws,
          if and to the extent local laws are applicable.
        </p>
        <p>
          The Services are not tailored to comply with industry-specific
          regulations (Health Insurance Portability and Accountability Act
          (HIPAA), Federal Information Security Management Act (FISMA), etc.) ,
          so if your interactions would be subjected to such laws, you may not
          use the Services. You may not use the Services in a way that would
          violate the Gramm-Leach-Bliley Act (GLBA).
        </p>
      </section>

      {/* --- Section 2: INTELLECTUAL PROPERTY RIGHTS --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='intellectual-property'
      >
        2. INTELLECTUAL PROPERTY RIGHTS
      </h2>

      <h3 className='text-xl font-semibold mt-6 mb-3'>
        Our intellectual property
      </h3>
      <section className='space-y-4 text-gray-400'>
        <p>
          We are the owner or the licensee of all intellectual property rights
          in our Services , including all source code, databases, functionality,
          software, website designs, audio, video, text, photographs, and
          graphics in the Services (collectively, the "**Content**") , as well
          as the trademarks, service marks, and logos contained therein
          ("**Marks**").
        </p>
        <p>
          Our Content and Marks are protected by copyright and trademark laws
          (and various other intellectual property rights and unfair competition
          laws) and treaties in the United States and around the world[cite:
          24]. The Content and Marks are provided in the Services "AS IS" for
          your personal use only.
        </p>
      </section>

      <h3 className='text-xl font-semibold mt-6 mb-3'>
        Your use of our Services
      </h3>
      <section className='space-y-4 text-gray-400'>
        <p>
          Subject to your compliance with these Legal Terms, including the
          ["**PROHIBITED ACTIVITIES**"] (#prohibited-activities) section below ,
          we grant you a non-exclusive, non-transferable, revocable license to:
        </p>
        <ul className='list-disc ml-6 space-y-1'>
          <li>access the Services; and</li>

          <li>
            download or print a copy of any portion of the Content to which you
            have properly gained access solely for your personal, non-commercial
            use.
          </li>
        </ul>
        <p>
          Except as set out in this section or elsewhere in our Legal Terms, no
          part of the Services and no Content or Marks may be copied,
          reproduced, aggregated, republished, uploaded, posted, publicly
          displayed, encoded, translated, transmitted, distributed, sold,
          licensed, or otherwise exploited for any commercial purpose
          whatsoever, without our express prior written permission.
        </p>
        <p>
          If you wish to make any use of the Services, Content, or Marks other
          than as set out in this section, please address your request to:{" "}
          <a
            href='mailto:zyphrapp@proton.me'
            className='text-blue-600 hover:text-blue-800 font-medium'
          >
            zyphrapp@proton.me
          </a>
          . If we ever grant you permission to post, reproduce, or publicly
          display any part of our Services or Content, you must identify us as
          the owners or licensors of the Services, Content, or Marks and ensure
          that any copyright or proprietary notice appears or is visible on
          posting, reproduction, or display.
        </p>
        <p>
          We reserve all rights not expressly granted to you in and to the
          Services, the Content, and the Marks. Any breach of these Intellectual
          Property Rights will constitute a material breach of our Legal Terms
          and your right to use our Services will terminate immediately.
        </p>
      </section>

      <h3 className='text-xl font-semibold mt-6 mb-3'>
        Your submissions and contributions
      </h3>
      <section className='space-y-4 text-gray-400'>
        <p>
          Please review this section and the ["**PROHIBITED ACTIVITIES**"]
          (#prohibited-activities) section carefully prior to using our
          Services. This section will apply to any text, photograph, music,
          video, or other material posted by you to the Services
          ("**Contributions**"). By submitting Contributions to the Services,
          you agree to the following terms:
        </p>
        {/* Note: The document text stops here, and the full terms are covered in later sections (9 and 10). */}
      </section>

      {/* --- Section 3: USER REPRESENTATIONS --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='user-representations'
      >
        3. USER REPRESENTATIONS
      </h2>
      <section className='space-y-4 text-gray-400'>
        <p>By using the Services, you represent and warrant that:</p>
        <ol className='list-decimal ml-6 space-y-2'>
          <li>
            all registration information you submit will be true, accurate,
            current, and complete;
          </li>

          <li>
            you will maintain the accuracy of such information and promptly
            update such registration information as necessary;
          </li>

          <li>
            you have the legal capacity and you agree to comply with these Legal
            Terms;
          </li>

          <li>
            you are not a minor in the jurisdiction in which you reside, or if a
            minor, you have received parental permission to use the Services;
          </li>

          <li>
            you will not access the Services through automated or non-human
            means, whether through a bot, script or otherwise;
          </li>

          <li>
            you will not use the Services for any illegal or unauthorized
            purpose[cite: 45, 46]; and
          </li>

          <li>
            your use of the Services will not violate any applicable law or
            regulation.
          </li>
        </ol>
        <p>
          If you provide any information that is untrue, inaccurate, not
          current, or incomplete, we have the right to suspend or terminate your
          account and refuse any and all current or future use of the Services
          (or any portion thereof).
        </p>
      </section>

      {/* --- Section 4: USER REGISTRATION --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='user-registration'
      >
        4. USER REGISTRATION
      </h2>
      <section className='space-y-4 text-gray-400'>
        <p>
          You may be required to register with the Services. You agree to keep
          your password confidential and will be responsible for all use of your
          account and password. We reserve the right to remove, reclaim, or
          change a username you select if we determine, in our sole discretion,
          that such username is inappropriate, obscene, or otherwise
          objectionable.
        </p>
      </section>

      {/* --- Section 5: PURCHASES AND PAYMENT --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='purchases-payment'
      >
        5. PURCHASES AND PAYMENT
      </h2>
      <section className='space-y-4 text-gray-400'>
        <p>We accept the following forms of payment:</p>
        <ul className='list-disc ml-6 space-y-1'>
          <li>Visa </li>
          <li>Mastercard </li>
          <li>American Express </li>
          <li>Discover </li>
          <li>PayPal </li>
          <li>SEPA Direct Debit </li>
        </ul>
        <p>
          You agree to provide current, complete, and accurate purchase and
          account information for all purchases made via the Services. You
          further agree to promptly update account and payment information,
          including email address, payment method, and payment card expiration
          date, so that we can complete your transactions and contact you as
          needed.
        </p>
        <p>
          Sales tax will be added to the price of purchases as deemed required
          by us. We may change prices at any time. All payments shall be in
          euros.
        </p>
        <p>
          You agree to pay all charges at the prices then in effect for your
          purchases and any applicable shipping fees , and you authorize us to
          charge your chosen payment provider for any such amounts upon placing
          your order. We reserve the right to correct any errors or mistakes in
          pricing, even if we have already requested or received payment.
        </p>
        <p>
          We reserve the right to refuse any order placed through the Services.
          We may, in our sole discretion, limit or cancel quantities purchased
          per person, per household, or per order. These restrictions may
          include orders placed by or under the same customer account, the same
          payment method, and/or orders that use the same billing or shipping
          address. We reserve the right to limit or prohibit orders that, in our
          sole judgment, appear to be placed by dealers, resellers, or
          distributors.
        </p>
      </section>

      {/* --- Section 6: SUBSCRIPTIONS --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='subscriptions'
      >
        6. SUBSCRIPTIONS
      </h2>
      <section className='space-y-4 text-gray-400'>
        <p>
          Your subscription will continue in effect until the end of the
          subscription period and will automatically renew unless you turn off
          auto-renewal at least 24 hours before the end of the current billing
          period (the "**Subscription Term**"). You may also cancel your
          subscription to take effect at the end of the current billing period
          by contacting us using the contact information provided below.
        </p>
        <p>
          If you do not cancel your subscription before the end of the current
          billing period, we will charge your chosen payment method a recurring
          subscription fee at the then-current price for your account, plus
          applicable taxes, until you cancel your subscription[cite: 72, 73].
        </p>
        <p>
          We reserve the right to adjust pricing for our subscriptions in any
          manner and at any time as we may determine in our sole and absolute
          discretion. Except as otherwise expressly provided for in these Legal
          Terms, any price changes to your subscription will take effect
          following notice to you.
        </p>
      </section>

      {/* --- Section 7: CANCELLATION --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='cancellation'
      >
        7. CANCELLATION
      </h2>
      <section className='space-y-4 text-gray-400'>
        <p>
          You can cancel your subscription at any time by contacting us using
          the contact information provided below or by going to your account
          settings. Your cancellation will take effect at the end of the current
          paid term.
        </p>
      </section>

      {/* --- Section 8: PROHIBITED ACTIVITIES --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='prohibited-activities'
      >
        8. PROHIBITED ACTIVITIES
      </h2>
      <section className='space-y-4 text-gray-400'>
        <p>
          You may not access or use the Services for any purpose other than that
          for which we make the Services available. The Services may not be used
          in connection with any commercial endeavors except those that are
          specifically endorsed or approved by us.
        </p>
        <p>As a user of the Services, you agree not to:</p>
        <ul className='list-disc ml-6 space-y-2'>
          <li>
            Systematically retrieve data or other content from the Services to
            create or compile, directly or indirectly, a collection,
            compilation, database, or directory without written permission from
            us.
          </li>

          <li>
            Trick, defraud, or mislead us and other users, especially in any
            attempt to learn sensitive account information such as user
            passwords.
          </li>

          <li>
            Circumvent, disable, or otherwise interfere with security-related
            features of the Services, including features that prevent or
            restrict the use or copying of any Content or enforce limitations on
            the use of the Services and/or the Content contained therein[cite:
            85].
          </li>

          <li>
            Disparage, tarnish, or otherwise harm, in our opinion, us and/or the
            Services.
          </li>

          <li>
            Use any information obtained from the Services in order to harass,
            abuse, or harm another person.
          </li>

          <li>
            Make improper use of our support services or submit false reports of
            abuse or misconduct.
          </li>

          <li>
            Use the Services in a manner inconsistent with any applicable laws
            or regulations.
          </li>

          <li>
            Upload or transmit (or attempt to upload or to transmit) viruses,
            Trojan horses, or other material, including excessive use of capital
            letters and spamming (continuous posting of repetitive text), that
            interferes with any party's uninterrupted use and enjoyment of the
            Services or modifies, impairs, disrupts, alters, or interferes with
            the use, features, functions, operation, or maintenance of the
            Services.
          </li>

          <li>
            Engage in any automated use of the system, such as using scripts to
            send comments or messages, or using any data mining, robots, or
            similar data gathering and extraction tools.
          </li>

          <li>
            Delete the copyright or other proprietary rights notice from any
            Content.
          </li>

          <li>
            Attempt to impersonate another user or person or use the username of
            another user.
          </li>

          <li>Sell or otherwise transfer your profile.</li>

          <li>
            Upload or transmit (or attempt to upload or to transmit) any
            material that acts as a passive or active information collection or
            transmission mechanism, including without limitation, clear graphics
            interchange formats ("gifs"), 1x1 pixels, web bugs, cookies, or
            other similar devices (sometimes referred to as "spyware" or
            "passive collection mechanisms" or "pcms").
          </li>

          <li>
            Decipher, decompile, disassemble, or reverse engineer any of the
            software comprising or in any way making up a part of the Services.
          </li>

          <li>
            Attempt to bypass any measures of the Services designed to prevent
            or restrict access to the Services, or any portion of the
            Services[cite: 97, 98].
          </li>

          <li>
            Harass, annoy, intimidate, or threaten any of our employees or
            agents engaged in providing any portion of the Services to you[cite:
            99].
          </li>

          <li>
            Create a user account by automated means or under false pretenses.
          </li>

          <li>
            Use the Services as part of any effort to compete with us or
            otherwise use the Services and/or the Content for any
            revenue-generating endeavor or commercial enterprise.
          </li>

          <li>
            Make any unauthorized use of the Services, including collecting
            usernames and/or email addresses of users by electronic or other
            means for the purpose of sending unsolicited email, or creating user
            accounts by automated means or under false pretenses.
          </li>

          <li>
            Use a buying agent or purchasing agent to make purchases on the
            Services.
          </li>
        </ul>
      </section>

      {/* --- Section 9: USER CONTRIBUTIONS --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='user-contributions'
      >
        9. USER CONTRIBUTIONS
      </h2>
      <section className='space-y-4 text-gray-400'>
        <p>
          The Services may invite you to chat, contribute to, or participate in
          blogs, message boards, online forums, and other functionality [cite:
          105], and may provide you with the opportunity to create, submit,
          post, display, transmit, perform, publish, distribute, or broadcast
          content and materials to us or on the Services, including but not
          limited to text, writings, video, audio, photographs, graphics,
          comments, suggestions, or personal information or other material
          (collectively, "**Contributions**"). Contributions may be viewable by
          other users of the Services and through third-party websites. As such,
          any Contributions you transmit may be treated as non-confidential and
          non-proprietary.
        </p>
        <p>
          When you create or make available any Contributions, you thereby
          represent and warrant that:
        </p>
        <ul className='list-disc ml-6 space-y-2'>
          <li>
            The creation, distribution, transmission, public display, or
            performance, and the accessing, downloading, or copying of your
            Contributions do not and will not infringe the proprietary rights,
            including but not limited to the copyright, patent, trademark, trade
            secret, or moral rights of any third party.
          </li>

          <li>
            You are the creator and owner of or have the necessary licenses,
            rights, consents, releases, and permissions to use and to authorize
            us, the Services, and other users of the Services to use your
            Contributions in any manner contemplated by the Services and these
            Legal Terms.
          </li>

          <li>
            You have the written consent, release, and/or permission of every
            identifiable single person in your Contributions to use the name or
            likeness of every such identifiable single person to enable
            inclusion and use of your Contributions in any manner contemplated
            by the Services and these Legal Terms.
          </li>

          <li>
            Your Contributions are not false, inaccurate, or misleading[cite:
            112].
          </li>

          <li>
            Your Contributions are not unsolicited or unauthorized advertising,
            promotional materials, pyramid schemes, chain letters, spam, mass
            mailings, or other forms of solicitation.
          </li>

          <li>
            Your Contributions are not obscene, lewd, lascivious, filthy,
            violent, harassing, libelous, slanderous, or otherwise objectionable
            (as determined by us).
          </li>

          <li>
            Your Contributions do not ridicule, mock, disparage, intimidate, or
            abuse anyone.
          </li>

          <li>
            Your Contributions are not used to harass or threaten (in the legal
            sense of those terms) any other person and to promote violence
            against a specific person or class of people.
          </li>

          <li>
            Your Contributions do not violate any applicable law, regulation, or
            rule.
          </li>

          <li>
            Your Contributions do not violate the privacy or publicity rights of
            any third party.
          </li>

          <li>
            Your Contributions do not include any offensive comments that are
            connected to race, national origin, gender, sexual preference, or
            physical handicap.
          </li>

          <li>
            Your Contributions do not otherwise violate, or link to material
            that violates, any provision of these Legal Terms, or any applicable
            law or regulation.
          </li>
        </ul>
      </section>

      {/* --- Section 10: CONTRIBUTION LICENSE --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='contribution-license'
      >
        10. CONTRIBUTION LICENSE
      </h2>
      <section className='space-y-4 text-gray-400'>
        <p>
          You and Services agree that we may access, store, process, and use any
          information and personal data that you provide following the terms of
          the Privacy Policy and your choices (including settings). By
          submitting suggestions or other feedback regarding the Services, you
          agree that we can use and share such feedback for any purpose without
          compensation to you.
        </p>
        <p>
          We do not assert any ownership over your Contributions. You retain
          full ownership of all of your Contributions and any intellectual
          property rights or other proprietary rights associated with your
          Contributions. We are not liable for any statements or representations
          in your Contributions provided by you in any area on the Services. You
          are solely responsible for your Contributions to the Services and you
          expressly agree to exonerate us from any and all responsibility and to
          refrain from any legal action against us regarding your Contributions.
        </p>
      </section>

      {/* --- Section 11: MOBILE APPLICATION LICENSE --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='mobile-app-license'
      >
        11. MOBILE APPLICATION LICENSE
      </h2>

      <h3 className='text-xl font-semibold mt-6 mb-3'>License Grant</h3>
      <section className='space-y-4 text-gray-400'>
        <p>
          If you access the Services via the App, then we grant you a revocable,
          non-exclusive, non-transferable, limited right to install and use the
          App on wireless electronic devices owned or controlled by you [cite:
          129], and to access and use the App on such devices strictly in
          accordance with the terms and conditions of this mobile application
          license contained in these Legal Terms.
        </p>
        <p>You shall not:</p>
        <ul className='list-disc ml-6 space-y-2'>
          <li>
            except as permitted by applicable law, decompile, reverse engineer,
            disassemble, attempt to derive the source code of, or decrypt the
            App;
          </li>

          <li>
            make any modification, adaptation, improvement, enhancement,
            translation, or derivative work from the App;
          </li>

          <li>
            violate any applicable laws, rules, or regulations in connection
            with your access or use of the App;
          </li>

          <li>
            remove, alter, or obscure any proprietary notice (including any
            notice of copyright or trademark) posted by us or the licensors of
            the App;
          </li>

          <li>
            use the App for any revenue-generating endeavor, commercial
            enterprise, or other purpose for which it is not designed or
            intended;
          </li>

          <li>
            make the App available over a network or other environment
            permitting access or use by multiple devices or users at the same
            time;
          </li>

          <li>
            use the App for creating a product, service, or software that is,
            directly or indirectly, competitive with or in any way a substitute
            for the App; or
          </li>

          <li>
            use the App to send automated queries or unsolicited commercial
            email.
          </li>
        </ul>
      </section>

      <h3 className='text-xl font-semibold mt-6 mb-3'>
        Apple and Android Devices
      </h3>
      <section className='space-y-4 text-gray-400'>
        <p>
          The following terms apply when you use a mobile application obtained
          from either the Apple Store or Google Play (each an "**App
          Distributor**") to access the Services:
        </p>
        <ol className='list-decimal ml-6 space-y-2'>
          <li>
            the license granted to you for our App is limited to a
            non-transferable license to use the App on a device that utilizes
            the Apple iOS or Android operating systems, as applicable, and in
            accordance with the usage rules set forth in the applicable App
            Distributor's terms of service;
          </li>

          <li>
            we are responsible for providing any maintenance and support
            services with respect to the App as specified in the terms and
            conditions of this mobile application license contained in these
            Legal Terms or as otherwise required under applicable law, and you
            acknowledge that each App Distributor has no obligation whatsoever
            to furnish any maintenance and support services with respect to the
            App[cite: 142, 143];
          </li>

          <li>
            in the event of any failure of the App to conform to any applicable
            warranty, you may notify the applicable App Distributor, and the App
            Distributor, in accordance with its terms and policies, may refund
            the purchase price, if any, paid for the App, and to the maximum
            extent permitted by applicable law, the App Distributor will have no
            other warranty obligation whatsoever with respect to the App[cite:
            144];
          </li>

          <li>
            you represent and warrant that (i) you are not located in a country
            that is subject to a U.S. government embargo, or that has been
            designated by the U.S. government as a "terrorist supporting"
            country and (ii) you are not listed on any U.S. government list of
            prohibited or restricted parties;
          </li>

          <li>
            you must comply with applicable third-party terms of agreement when
            using the App, e.g., if you have a VoIP application, you must not be
            in violation of their mobile data service agreement when using the
            App; and
          </li>

          <li>
            you acknowledge and agree that the App Distributors are third-party
            beneficiaries of the terms and conditions in this mobile application
            license contained in these Legal Terms, and that each App
            Distributor will have the right (and will be deemed to have accepted
            the right) to enforce the terms and conditions in this mobile
            application license contained in these Legal Terms against you as a
            third-party beneficiary thereof.
          </li>
        </ol>
      </section>

      {/* --- Section 12: SERVICES MANAGEMENT --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='services-management'
      >
        12. SERVICES MANAGEMENT
      </h2>
      <section className='space-y-4 text-gray-400'>
        <p>We reserve the right, but not the obligation, to:</p>
        <ol className='list-decimal ml-6 space-y-2'>
          <li>monitor the Services for violations of these Legal Terms;</li>

          <li>
            take appropriate legal action against anyone who, in our sole
            discretion, violates the law or these Legal Terms, including without
            limitation, reporting such user to law enforcement authorities[cite:
            150];
          </li>

          <li>
            in our sole discretion and without limitation, refuse, restrict
            access to, limit the availability of, or disable (to the extent
            technologically feasible) any of your Contributions or any portion
            thereof;
          </li>

          <li>
            in our sole discretion and without limitation, notice, or liability,
            to remove from the Services or otherwise disable all files and
            content that are excessive in size or are in any way burdensome to
            our systems; and
          </li>

          <li>
            otherwise manage the Services in a manner designed to protect our
            rights and property and to facilitate the proper functioning of the
            Services.
          </li>
        </ol>
      </section>

      {/* --- Section 13: PRIVACY POLICY --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='privacy-policy'
      >
        13. PRIVACY POLICY
      </h2>
      <section className='space-y-4 text-gray-400'>
        <p>
          We care about data privacy and security. By using the Services, you
          agree to be bound by our Privacy Policy posted on the Services, which
          is incorporated into these Legal Terms.
        </p>
        <p>
          Please be advised the Services are hosted in Germany. If you access
          the Services from any other region of the world with laws or other
          requirements governing personal data collection, use, or disclosure
          that differ from applicable laws in Germany, then through your
          continued use of the Services, you are transferring your data to
          Germany, and you expressly consent to have your data transferred to
          and processed in Germany.
        </p>
      </section>

      {/* --- Section 14: TERM AND TERMINATION --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='term-termination'
      >
        14. TERM AND TERMINATION
      </h2>
      <section className='space-y-4 text-gray-400'>
        <p>
          These Legal Terms shall remain in full force and effect while you use
          the Services.
        </p>
        <blockquote className=' border-l-4 border-red-500 p-4 font-bold my-4 rounded-md'>
          <p>
            WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE
            RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR
            LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING
            BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR
            NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY
            REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS
            OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR
            PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT
            OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR
            SOLE DISCRETION.
          </p>
        </blockquote>
        <p>
          If we terminate or suspend your account for any reason, you are
          prohibited from registering and creating a new account under your
          name, a fake or borrowed name, or the name of any third party, even if
          you may be acting on behalf of the third party. In addition to
          terminating or suspending your account, we reserve the right to take
          appropriate legal action, including without limitation pursuing civil,
          criminal, and injunctive redress.
        </p>
      </section>

      {/* --- Section 15: MODIFICATIONS AND INTERRUPTIONS --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='modifications-interruptions'
      >
        15. MODIFICATIONS AND INTERRUPTIONS
      </h2>
      <section className='space-y-4 text-gray-400'>
        <p>
          We reserve the right to change, modify, or remove the contents of the
          Services at any time or for any reason at our sole discretion without
          notice. However, we have no obligation to update any information on
          our Services. We also reserve the right to modify or discontinue all
          or part of the Services without notice at any time. We will not be
          liable to you or any third party for any modification, price change,
          suspension, or discontinuance of the Services.
        </p>
        <p>
          We cannot guarantee the Services will be available at all times[cite:
          168]. We may experience hardware, software, or other problems or need
          to perform maintenance related to the Services, resulting in
          interruptions, delays, or errors. We reserve the right to change,
          revise, update, suspend, discontinue, or otherwise modify the Services
          at any time or for any reason without notice to you.
        </p>
        <p>
          You agree that we have no liability whatsoever for any loss, damage,
          or inconvenience caused by your inability to access or use the
          Services during any downtime or discontinuance of the Services[cite:
          171]. Nothing in these Legal Terms will be construed to obligate us to
          maintain and support the Services or to supply any corrections,
          updates, or releases in connection therewith.
        </p>
      </section>

      {/* --- Section 16: GOVERNING LAW --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='governing-law'
      >
        16. GOVERNING LAW
      </h2>
      <section className='space-y-4 text-gray-400'>
        <p>
          These Legal Terms and your use of the Services are governed by and
          construed in accordance with the laws of Germany applicable to
          agreements made and to be entirely performed within Germany, without
          regard to its conflict of law principles.
        </p>
      </section>

      {/* --- Section 17: DISPUTE RESOLUTION --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='dispute-resolution'
      >
        17. DISPUTE RESOLUTION
      </h2>

      <h3 className='text-xl font-semibold mt-6 mb-3'>Binding Arbitration</h3>
      <section className='space-y-4 text-gray-400'>
        <p>
          If you and Zyphr are unable to resolve a Dispute through informal
          negotiations, the Dispute (except those Disputes expressly excluded
          below) will be finally and exclusively resolved by binding
          arbitration.
        </p>
        <blockquote className=' border-l-4 border-yellow-500 p-4 font-bold my-4 rounded-md'>
          <p>
            YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT
            TO SUE IN COURT AND HAVE A JURY TRIAL.
          </p>
        </blockquote>
        <p>
          The arbitration shall be commenced and conducted under the Commercial
          Arbitration Rules of the American Arbitration Association ("**AAA**")
          and, where appropriate, the AAA's Supplementary Procedures for
          Consumer Related Disputes ("**AAA Consumer Rules**") , both of which
          are available at the AAA website:{" "}
          <a
            href='http://www.adr.org/'
            className='text-blue-600 hover:text-blue-800 font-medium'
          >
            www.adr.org
          </a>
          . Your arbitration fees and your share of arbitrator compensation
          shall be governed by the AAA Consumer Rules and, where appropriate,
          limited by the AAA Consumer Rules. The arbitration may be conducted in
          person, through the submission of documents, by phone, or online. The
          arbitrator will make a decision in writing, but need not provide a
          statement of reasons unless requested by either Party. The arbitrator
          must follow applicable law, and any award may be challenged if the
          arbitrator fails to do so. Except where otherwise required by the
          applicable AAA rules or applicable law, the arbitration will take
          place in Germany[cite: 184, 185]. Except as otherwise provided herein,
          the Parties may litigate in court to compel arbitration, stay
          proceedings pending arbitration, or to confirm, modify, vacate, or
          enter judgment on the award entered by the arbitrator.
        </p>
        <p>
          If for any reason, a Dispute proceeds in court rather than in
          arbitration, the Dispute shall be commenced or prosecuted in the state
          and federal courts located in Germany , and the Parties hereby consent
          to, and waive all defenses of lack of personal jurisdiction, and
          *forum non conveniens* with respect to venue and jurisdiction in such
          state and federal courts.
        </p>
        <p>
          Application of the United Nations Convention on Contracts for the
          International Sale of Goods and the Uniform Computer Information
          Transaction Act (UCITA) are excluded from these Legal Terms[cite:
          187].
        </p>
        <p>
          In no event shall any Dispute brought by either Party related in any
          way to the Services be commenced more than one (1) years after the
          cause of action arose.
        </p>
        <p>
          If this provision is found to be illegal or unenforceable, then
          neither Party will elect to arbitrate any Dispute falling within that
          portion of this provision found to be illegal or unenforceable and
          such Dispute shall be decided by a court of competent jurisdiction
          within the courts listed for jurisdiction above, and the Parties agree
          to submit to the personal jurisdiction of that court.
        </p>
      </section>

      <h3 className='text-xl font-semibold mt-6 mb-3'>Restrictions</h3>
      <section className='space-y-4 text-gray-400'>
        <p>
          The Parties agree that any arbitration shall be limited to the Dispute
          between the Parties individually. To the full extent permitted by law:
        </p>
        <ul className='list-disc ml-6 space-y-2'>
          <li>no arbitration shall be joined with any other proceeding;</li>

          <li>
            there is no right or authority for any Dispute to be arbitrated on a
            class-action basis or to utilize class action procedures; and
          </li>

          <li>
            there is no right or authority for any Dispute to be brought in a
            purported representative capacity on behalf of the general public or
            any other persons.
          </li>
        </ul>
      </section>

      <h3 className='text-xl font-semibold mt-6 mb-3'>
        Exceptions to Binding Arbitration
      </h3>
      <section className='space-y-4 text-gray-400'>
        <p>
          The Parties agree that the following Disputes are not subject to the
          above provisions concerning binding arbitration:
        </p>
        <ul className='list-disc ml-6 space-y-2'>
          <li>
            any Disputes seeking to enforce or protect, or concerning the
            validity of, any of the intellectual property rights of a Party;
          </li>

          <li>
            any Dispute related to, or arising from, allegations of theft,
            piracy, invasion of privacy, or unauthorized use; and
          </li>
          <li>any claim for injunctive relief.</li>
        </ul>
        <p>
          If this provision is found to be illegal or unenforceable, then
          neither Party will elect to arbitrate any Dispute falling within that
          portion of this provision found to be illegal or unenforceable and
          such Dispute shall be decided by a court of competent jurisdiction
          within the courts listed for jurisdiction above, and the Parties agree
          to submit to the personal jurisdiction of that court.
        </p>
      </section>

      {/* --- Section 18: CORRECTIONS --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='corrections'
      >
        18. CORRECTIONS
      </h2>
      <section className='space-y-4 text-gray-400'>
        <p>
          There may be information on the Services that contains typographical
          errors, inaccuracies, or omissions, including descriptions, pricing,
          availability, and various other information. We reserve the right to
          correct any errors, inaccuracies, or omissions and to change or update
          the information on the Services at any time, without prior notice.
        </p>
      </section>

      {/* --- Section 19: DISCLAIMER --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='disclaimer'
      >
        19. DISCLAIMER
      </h2>
      <section className='space-y-4 text-gray-400'>
        <blockquote className=' border-l-4 border-red-500 p-4 my-4 rounded-md'>
          <p>
            THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS[cite:
            203]. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE
            RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
            WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND
            YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT[cite: 205, 206].
          </p>
          <p className='mt-4'>
            WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR
            COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES
            OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO
            LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR
            INACCURACIES OF CONTENT AND MATERIALS , (2) PERSONAL INJURY OR
            PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR
            ACCESS TO AND USE OF THE SERVICES , (3) ANY UNAUTHORIZED ACCESS TO
            OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION
            AND/OR FINANCIAL INFORMATION STORED THEREIN , (4) ANY INTERRUPTION
            OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES [cite: 206,
            207], (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE
            TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY , AND/OR
            (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY
            LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY
            CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE
            SERVICES.
          </p>
          <p className='mt-4'>
            WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR
            ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY
            THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR
            MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND
            WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR
            MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS
            OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR
            SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE
            YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
          </p>
        </blockquote>
      </section>

      {/* --- Section 20: LIMITATIONS OF LIABILITY --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='limitations-liability'
      >
        20. LIMITATIONS OF LIABILITY
      </h2>
      <section className='space-y-4 text-gray-400'>
        <blockquote className=' border-l-4 border-red-500 p-4  my-4 rounded-md'>
          <p>
            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
            TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
            EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
            PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM
            YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES.
          </p>
        </blockquote>
      </section>

      {/* --- Section 21: INDEMNIFICATION --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='indemnification'
      >
        21. INDEMNIFICATION
      </h2>
      <section className='space-y-4 text-gray-400'>
        <p>
          You agree to defend, indemnify, and hold us harmless, including our
          subsidiaries, affiliates, and all of our respective officers, agents,
          partners, and employees, from and against any loss, damage, liability,
          claim, or demand, including reasonable attorneys' fees and expenses,
          made by any third party due to or arising out of:
        </p>
        <ol className='list-decimal ml-6 space-y-2'>
          <li>your Contributions;</li>
          <li>use of the Services;</li>
          <li>breach of these Legal Terms;</li>

          <li>
            any breach of your representations and warranties set forth in these
            Legal Terms;
          </li>

          <li>
            your violation of the rights of a third party, including but not
            limited to intellectual property rights; or
          </li>

          <li>
            any overt harmful act toward any other user of the Services with
            whom you connected via the Services.
          </li>
        </ol>
        <p>
          Notwithstanding the foregoing, we reserve the right, at your expense,
          to assume the exclusive defense and control of any matter for which
          you are required to indemnify us, and you agree to cooperate, at your
          expense, with our defense of such claims. We will use reasonable
          efforts to notify you of any such claim, action, or proceeding which
          is subject to this indemnification upon becoming aware of it.
        </p>
      </section>

      {/* --- Section 22: USER DATA --- */}
      <h2 className='text-2xl font-bold mt-8 mb-4 border-b pb-2' id='user-data'>
        22. USER DATA
      </h2>
      <section className='space-y-4 text-gray-400'>
        <p>
          We will maintain certain data that you transmit to the Services for
          the purpose of managing the performance of the Services, as well as
          data relating to your use of the Services. Although we perform regular
          routine backups of data, you are solely responsible for all data that
          you transmit or that relates to any activity you have undertaken using
          the Services. You agree that we shall have no liability to you for any
          loss or corruption of any such data, and you hereby waive any right of
          action against us arising from any such loss or corruption of such
          data.
        </p>
      </section>

      {/* --- Section 23: ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='electronic-communications'
      >
        23. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
      </h2>
      <section className='space-y-4 text-gray-400'>
        <p>
          Visiting the Services, sending us emails, and completing online forms
          constitute electronic communications. You consent to receive
          electronic communications , and you agree that all agreements,
          notices, disclosures, and other communications we provide to you
          electronically, via email and on the Services, satisfy any legal
          requirement that such communication be in writing.
        </p>
        <blockquote className='border-l-4 border-blue-500 p-4 my-4 rounded-md'>
          <p>
            YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS,
            ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES,
            POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US
            OR VIA THE SERVICES.
          </p>
        </blockquote>
        <p>
          You hereby waive any rights or requirements under any statutes,
          regulations, rules, ordinances, or other laws in any jurisdiction
          which require an original signature or delivery or retention of
          non-electronic records, or to payment or the granting of credits by
          any means other than electronic means.
        </p>
      </section>

      {/* --- Section 24: MISCELLANEOUS --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='miscellaneous'
      >
        24. MISCELLANEOUS
      </h2>
      <section className='space-y-4 text-gray-400'>
        <p>
          These Legal Terms and any policies or operating rules posted by us on
          the Services or in respect to the Services constitute the entire
          agreement and understanding between you and us. Our failure to
          exercise or enforce any right or provision of these Legal Terms shall
          not operate as a waiver of such right or provision. These Legal Terms
          operate to the fullest extent permissible by law. We may assign any or
          all of our rights and obligations to others at any time. We shall not
          be responsible or liable for any loss, damage, delay, or failure to
          act caused by any cause beyond our reasonable control. If any
          provision or part of a provision of these Legal Terms is determined to
          be unlawful, void, or unenforceable, that provision or part of the
          provision is deemed severable from these Legal Terms and does not
          affect the validity and enforceability of any remaining provisions.
          There is no joint venture, partnership, employment or agency
          relationship created between you and us as a result of these Legal
          Terms or use of the Services. You agree that these Legal Terms will
          not be construed against us by virtue of having drafted them. You
          hereby waive any and all defenses you may have based on the electronic
          form of these Legal Terms and the lack of signing by the parties
          hereto to execute these Legal Terms.
        </p>
      </section>

      {/* --- Section 25: CONTACT US --- */}
      <h2
        className='text-2xl font-bold mt-8 mb-4 border-b pb-2'
        id='contact-us'
      >
        25. CONTACT US
      </h2>
      <section className='space-y-4 text-gray-400'>
        <p>
          In order to resolve a complaint regarding the Services or to receive
          further information regarding use of the Services, please contact us
          at:
        </p>
        <address className='not-italic font-semibold space-y-1'>
          <p>Zyphr </p>
          <p>Steinweg 19 </p>
          <p>Braunschweig, Lower Saxony 38100 </p>
          <p>Germany </p>
          <p>Phone: +491712232218 </p>

          <p>
            Email:{" "}
            <a
              href='mailto:zyphrapp@proton.me'
              className='text-blue-600 hover:text-blue-800 font-medium'
            >
              zyphrapp@proton.me
            </a>{" "}
          </p>
        </address>
      </section>
    </div>
  );
};

export default TermsOfService;
