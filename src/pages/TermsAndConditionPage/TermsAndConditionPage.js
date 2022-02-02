import Title from "components/Title/Title";
import Footer from "layouts/Footer/Footer";
import React from "react";
import useMediaQuery from "utils/hooks/useMediaQuery ";
import styles from "./TermsAndConditionPage.module.css";

function TermsAndConditionPage() {
  const isBellow500px = useMediaQuery("(max-width : 500px)");
  return (
    <div className={styles.wrapper}>
      <div
        className={`container-wrapper ${isBellow500px ? "py-30px" : "py-50px"}`}
      >
        <div className="mb-30px">
          <Title title="Privacy Policy" className="fs-74px uppercase" />
        </div>
        <p className="fs-22px white font-anybody-regular mb-35px lh-1_6">
          One of our main priorities is the privacy of our visitors. This
          Privacy Policy document contains types of information that is
          collected and recorded by Rich Cycle Rebels (RCR) and how we use it.
        </p>
        <p className="fs-22px white font-anybody-regular mb-35px lh-1_6">
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </p>
        <p className="fs-22px white font-anybody-regular mb-35px lh-1_6">
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collected in . This policy is not applicable to any
          information collected offline or via channels other than this website.
        </p>
        <p className="fs-22px white font-anybody-regular mb-35px lh-1_6">
          Consent <br />
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>
        <p className="fs-22px white font-anybody-regular mb-35px lh-1_6">
          Information we collect <br />
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear
        </p>
        <p className="fs-22px white font-anybody-regular mb-35px lh-1_6">
          to you at the point we ask you to provide your personal information
        </p>
        <p className="fs-22px white font-anybody-regular mb-35px lh-1_6">
          If you contact us directly, we may receive additional information
          about you such as your name, email address, public Ethereum address,
          social media profiles, phone number, the contents of the message
          and/or attachments you may send us, and any other information you may
          choose to provide.
        </p>
        <p className="fs-22px white font-anybody-regular mb-35px lh-1_6">
          In future endeavors we may ask for your contact information, including
          items such as name, company name, address, public Ethereum address,
          social media files, email address, and telephone number.
        </p>
        <p className="fs-22px white font-anybody-regular mb-35px lh-1_6">
          How we use your information <br />
          We use the information we collect in various ways, including to:
        </p>
        <p className="fs-22px white font-anybody-regular mb-35px lh-1_6">
          Provide, operate, and maintain our website and "Temple" Improve,
          personalize, and expand our website and "Temple" Understand and
          analyze how you use our website and "Temple"
        </p>
        <p className="fs-22px white font-anybody-regular mb-80px lh-1_6">
          Develop new products, services, features, and functionality
          Communicate with you, either directly or through one of our partners,
          including for customer service, to provide you with updates and other
          information relating to the website, and for marketing and promotional
          purposes <br />
          Send you emails <br />
          Find and prevent fraud
        </p>
        <div className="mb-80px">
          <div className="font-anybody-bold yellow mb-25px block fs-40px uppercase">
            Log Files
          </div>
          <p className="fs-22px white font-anybody-regular  lh-1_6">
            <a
              href=""
              target="_blank"
              className="white underline"
              rel="noreferrer"
              style={{ wordBreak: "break-word" }}
            ></a>{" "}
            follows a standard procedure of using log files. These files log
            visitors when they visit websites. All hosting companies do this and
            are a part of hosting services' analytics. The information collected
            by log files includes internet protocol (IP) addresses, browser
            type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users' movement on the website, and gathering
            demographic information.
          </p>
        </div>
        <div className="mb-80px">
          <div className="font-anybody-bold yellow mb-25px block fs-40px uppercase">
            Cookies and Web Beacons
          </div>
          <p className="fs-22px white font-anybody-regular  lh-1_6">
            Like any other website,{" "}
            <a
              href="https://richcyclerebels.com "
              target="_blank"
              className="white underline"
              rel="noreferrer"
              style={{ wordBreak: "break-word" }}
            >
              https://richcyclerebels.com{" "}
            </a>{" "}
            uses 'cookies'. These cookies are used to store information
            including visitors' preferences, and the pages on the website that
            the visitor accessed or visited. The information is used to optimize
            the users' experience by customizing our web page content based on
            visitors' browser type and/or other information.
          </p>
        </div>

        <div className="mb-80px">
          <div className="font-anybody-bold yellow mb-25px block fs-40px uppercase">
            Google DoubleClick DART Cookie
          </div>
          <p className="fs-22px white font-anybody-regular  lh-1_6">
            Google is one of the third-party vendors on our site. It also uses
            cookies, known as DART cookies, to serve ads to our site visitors
            based upon their visit to{" "}
            <a
              href="www.website.com"
              target="_blank"
              className="white underline"
              rel="noreferrer"
              style={{ wordBreak: "break-word" }}
            >
              www.website.com
            </a>{" "}
            and other sites on the internet. However, visitors may choose to
            decline the use of DART cookies by visiting the Google ad and
            content network Privacy Policy at the following URL –
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              className="white underline"
              rel="noreferrer"
              style={{ wordBreak: "break-word" }}
            >
              https://policies.google.com/technologies/ads
            </a>
            <br />
            <br />
            Our Advertising Partners <br />
            Some of the advertisers on our site may use cookies and web beacons.
            Our advertising partners are listed below. Each of our advertising
            partners has their own Privacy Policy for their policies on user
            data. For easier access, we hyperlinked to their Privacy Policies
            below. <br /> <br />
            Google
            <br />
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              className="white underline"
              rel="noreferrer"
              style={{ wordBreak: "break-word" }}
            >
              https://policies.google.com/technologies/ads
            </a>
          </p>
        </div>

        <div className="mb-80px">
          <div className="font-anybody-bold yellow mb-25px block fs-40px uppercase">
            Advertising Partners Privacy Policies
          </div>
          <p className="fs-22px white font-anybody-regular  lh-1_6">
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of{" "}
            <a
              href="https://richcyclerebels.com "
              target="_blank"
              className="white underline"
              rel="noreferrer"
              style={{ wordBreak: "break-word" }}
            >
              https://richcyclerebels.com
            </a>
            . Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on
            <a
              href="https://richcyclerebels.com "
              target="_blank"
              className="white underline"
              rel="noreferrer"
              style={{ wordBreak: "break-word" }}
            >
              https://richcyclerebels.com
            </a>
            , which are sent directly to users' browsers. They automatically
            receive your IP address when this occurs. These technologies are
            used to measure the effectiveness of their advertising campaigns
            and/or to personalize the advertising content that you see on
            websites that you visit. <br />
            <br />
            Note that{" "}
            <a
              href="https://richcyclerebels.com "
              target="_blank"
              className="white underline"
              rel="noreferrer"
              style={{ wordBreak: "break-word" }}
            >
              https://richcyclerebels.com
            </a>{" "}
            has no access to or control over these cookies that are used by
            third-party advertisers
          </p>
        </div>

        <div className="mb-80px">
          <div className="font-anybody-bold yellow mb-25px block fs-40px uppercase">
            Third Party Privacy Policies
          </div>
          <p className="fs-22px white font-anybody-regular  lh-1_6">
            <a
              href="https://richcyclerebels.com"
              target="_blank"
              className="white underline"
              rel="noreferrer"
              style={{ wordBreak: "break-word" }}
            >
              https://richcyclerebels.com{" "}
            </a>{" "}
            Privacy Policy does not apply to other advertisers or websites.
            Thus, we are advising you to consult the respective Privacy Policies
            of these third-party ad servers for more detailed information. It
            may include their practices and instructions about how to opt-out of
            certain options. You can choose to disable cookies through your
            individual browser options. To know more detailed information about
            cookie management with specific web browsers, it can be found at the
            browsers' respective websites.
          </p>
        </div>

        <div className="mb-80px">
          <div className="font-anybody-bold yellow mb-25px block fs-40px uppercase">
            CCPA Privacy Rights
          </div>
          <p className="fs-22px white font-anybody-regular  lh-1_6">
            (Do Not Sell My Personal Information) Under the CCPA, among other
            rights, California consumers have the right to:
            <br />
            <br />
            Request that a business that collects a consumer's personal data
            disclose the categories and specific pieces of personal data that a
            business has collected about consumers.
            <br />
            <br />
            Request that a business delete any personal data about the consumer
            that a business has collected.
            <br />
            <br />
            Request that a business that sells a consumer's personal data, not
            sell the consumer's personal data.
            <br />
            <br />
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
        </div>

        <div className="mb-80px">
          <div className="font-anybody-bold yellow mb-25px block fs-40px uppercase">
            GDPR Data Protection Rights
          </div>
          <p className="fs-22px white font-anybody-regular  lh-1_6">
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
            <br />
            <br />
            The right to access – You have the right to request copies of your
            personal data. We may charge you a small fee for this service.
            <br />
            <br />
            The right to rectification – You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.
            <br />
            <br />
            The right to erasure – You have the right to request that we erase
            your personal data, under certain conditions.
            <br />
            <br />
            The right to restrict processing – You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.
            <br />
            <br />
            The right to object to processing – You have the right to object to
            our processing of your personal data, under certain conditions.
            <br />
            <br />
            The right to data portability – You have the right to request that
            we transfer the data that we have collected to another organization,
            or directly to you, under certain conditions.
            <br />
            <br />
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
        </div>

        <div className="mb-50px">
          <div className="font-anybody-bold yellow mb-25px block fs-40px uppercase">
            Children's Information
          </div>
          <p className="fs-22px white font-anybody-regular  lh-1_6">
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
            <br />
            <br />
            NFT.com does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </p>
        </div>
      </div>

      <Footer
        links={[
          { title: "Home", link: "/", target: "" },
          { title: "OPENSEA", link: "", target: "" },
          { title: "TWITTER", link: "", target: "" },
          { title: "DISCORD", link: "", target: "" },
        ]}
      />
    </div>
  );
}

export default TermsAndConditionPage;
