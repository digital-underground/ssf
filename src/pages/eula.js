import React from 'react'
import './index.css'
import Footer from "../components/footer";
import Header from "../components/header";
import Divider from '@mui/material/Divider';

const EULAPage = () => {
  return (
    <main style={{ paddingTop: '260vh' }}>
      <Header />
      <section style={{ textAlign: 'center', paddingBottom: '20px'}}>
        <h1>SOFTSTACK FACTORY END USER LICENSE AGREEMENT</h1>
      </section>

      <section style={{ padding: '20px' }}>
        <p>This End User License Agreement (“Agreement“) is a binding agreement between you (“End User” or “you“) and SoftStack Factory. (“SSF“). This Agreement governs your use of the SSF application, (in its mobile or desktop form, including all related documentation, the “Application“). The Application is licensed, not sold, to you.</p>
        <p>BY DOWNLOADING AND/OR USING THIS APPLICATION, YOU (A) ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND THIS AGREEMENT; (B) REPRESENT THAT YOU ARE AT LEAST 18 YEARS OF AGE; AND (C) ACCEPT THIS AGREEMENT AND AGREE THAT YOU ARE LEGALLY BOUND BY ITS TERMS. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THE APPLICATION AND DELETE IT FROM YOUR MOBILE DEVICE.</p>
        <ul>
            <li>1. License Grant. Subject to the terms of this Agreement, SSF grants you a limited, non-exclusive and nontransferable license to:</li>
            <ul>
                <li>(a) Download, install, and use the Application for your personal, non-commercial use on a single mobile device owned or otherwise controlled by you (“Mobile Device“) strictly in accordance with the Application’s documentation.</li>
                <li>(b) Access and use on such Mobile Device, or on a desktop computer, the Content and Services (as defined in Section 5) made available in or otherwise accessible through the Application, strictly in accordance with this Agreement and specifically, but not limited to, the terms of use applicable to such Content and Services as set forth in Section 5.</li>
            </ul>
            <li>2. License Restrictions. You shall not:</li>
            <ul>
                <li>(a) Copy the Application, except as expressly permitted by this license;</li>
                <li>(b) Modify, translate, adapt, or otherwise create derivative works or improvements, whether or not patentable, of the Application;</li>
                <li>(c) Reverse engineer, disassemble, decompile, decode, or otherwise attempt to derive or gain access to the source code of the Application or any part thereof;</li>
                <li>(d) Remove, delete, alter, or obscure any trademarks or any copyright, trademark, patent, or other intellectual property or proprietary rights notices from the Application, including any copy thereof;</li>
                <li>(e) Rent, lease, lend, sell, sublicense, assign, distribute, publish, transfer, or otherwise make available the Application or any features or functionality of the Application, to any third party for any reason;</li>
                <li>(f) Remove, disable, circumvent, or otherwise create or implement any workaround to any copy protection, rights management or security features in or protecting the Application; or</li>
                <li>(g) Use the Application in any manner that violates any federal, state, and local laws and regulations.</li>
            </ul>
            <li>3. Reservation of Rights. You acknowledge and agree that the Application is provided under license, and not sold, to you. You do not acquire any ownership interest in the Application under this Agreement, or any other rights thereto other than to use the Application in accordance with the license granted, and subject to all terms, conditions and restrictions, under this Agreement. SSF and its licensors and service providers reserve and shall retain their entire right, title and interest in and to the Application, including all copyrights, trademarks, and other intellectual property rights therein or relating thereto, except as expressly granted to you in this Agreement.</li>
            <li>4. Collection and Use of Your Information. You acknowledge that when you download, install, or use the Application, SSF may use automatic means (including, for example, cookies and web beacons) to collect information about your Mobile Device or desktop computer and about your use of the Application. You also may be required to provide certain information about yourself as a condition to downloading, installing, or using the Application or its features and functionality. All information SSF collects through or in connection with this Application is subject to SSF’s Application Privacy Policy. By downloading, installing, using and providing information to or through this Application, you consent to all actions taken by SSF with respect to your information in compliance with the Application Privacy Policy.</li>
            <li>5. Content and Services. The Application may provide you with access to SSF’s application and the services accessible therein, and certain features, functionality and content accessible on or through the Application (collectively, “Content and Services“). This Agreement and SSF’s Application Privacy Policy govern your access and use of such Content and Services. Your access to and use of such Content and Services may require you to acknowledge your acceptance of this Agreement and/or SSF’s Application Privacy Policy and/or to register for an account and your failure to do so may restrict you from accessing or using some of the Application’s features and functionality.</li>
            <li>6. Access to SSF. The Application may provide you with access to SSF’s company website located at www.softstackfactory.com (the “Website“). Access to the content, functionality, products, features, and services contained on the Website is only for registered users. Registration for use of the Website is eligibility based and separate and unrelated to use of the Application. Use of the Application does not in any way qualify you to register for use of the Website.</li>
            <li>7. Geographic Restrictions. The Content and Services are based in the state of California in the United States and provided for access and use only by persons located in the United States. You acknowledge that you may not be able to access all or some of the Content and Services outside of the United States and that access thereto may not be legal by certain persons or in certain countries. If you access the Content and Services from outside the United States, you are responsible for compliance with local laws.</li>
            <li>8. Updates. Company may from time to time in its sole discretion develop and provide Application updates, which may include upgrades, bug fixes, patches, and other error corrections and/or new features (collectively, including related documentation, “Updates“). Updates may also modify or delete in their entirety certain features and functionality. You agree that Company has no obligation to provide any Updates or to continue to provide or enable any particular features or functionality. Based on your Mobile Device settings, when your Mobile Device is connected to the internet either:</li>
            <ul>
                <li>(a) The Application will automatically download and install all available Updates; or</li>
                <li>(b) You may receive notice of or be prompted to download and install available Updates.</li>
                <li>(c) You shall promptly download and install all Updates and acknowledge and agree that the Application or portions thereof may not properly operate should you fail to do so. You further agree that all Updates will be deemed part of the Application and be subject to all terms and conditions of this Agreement.</li>
            </ul>
            <li>9. Term and Termination.</li>
            <ul>
                <li>(a) The term of Agreement commences when you download the Application and acknowledge your acceptance of this Agreement and will continue in effect until terminated by you or Company as set forth in this Section 9.</li>
                <li>(b) You may terminate this Agreement by deleting the Application and all copies thereof from your Mobile Device.</li>
                <li>(c) Company may terminate this Agreement at any time without notice if it ceases to support the Application, which Company may do in its sole discretion. In addition, this Agreement will terminate immediately and automatically without any notice if you violate any of the terms and conditions of this Agreement.</li>
                <li>(d) Upon termination:</li>
                <ul>
                    <li>(i) All rights granted to you under this Agreement will also terminate; and</li>
                    <li>(ii) You must cease all use of the Application and delete all copies of the Application from your Mobile Device and account.</li>
                    <li>(iii) SSF reserves the right to retain and use, in compliance with the Application Privacy Policy, any and all information provided by you through your access and/or use of the Application.</li>
                </ul>
                <li>(e) Termination will not limit any of Company’s rights or remedies at law or in equity.</li>
            </ul>
            <li>10. Disclaimer of Warranties. THE APPLICATION IS PROVIDED TO YOU “AS IS” AND WITH ALL FAULTS AND DEFECTS WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, COMPANY, ON ITS OWN BEHALF AND ON BEHALF OF ITS AFFILIATES AND ITS AND THEIR RESPECTIVE LICENSORS AND SERVICE PROVIDERS, EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, WITH RESPECT TO THE APPLICATION, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT, AND WARRANTIES THAT MAY ARISE OUT OF COURSE OF DEALING, COURSE OF PERFORMANCE, USAGE OR TRADE PRACTICE. WITHOUT LIMITATION TO THE FOREGOING, COMPANY PROVIDES NO WARRANTY OR UNDERTAKING, AND MAKES NO REPRESENTATION OF ANY KIND THAT THE APPLICATION WILL MEET YOUR REQUIREMENTS, ACHIEVE ANY INTENDED RESULTS, BE COMPATIBLE OR WORK WITH ANY OTHER SOFTWARE, APPLICATIONS, SYSTEMS OR SERVICES, OPERATE WITHOUT INTERRUPTION, MEET ANY PERFORMANCE OR RELIABILITY STANDARDS OR BE ERROR FREE OR THAT ANY ERRORS OR DEFECTS CAN OR WILL BE CORRECTED.</li>
            <li>SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF OR LIMITATIONS ON IMPLIED WARRANTIES OR THE LIMITATIONS ON THE APPLICABLE STATUTORY RIGHTS OF A CONSUMER, SO SOME OR ALL OF THE ABOVE EXCLUSIONS AND LIMITATIONS MAY NOT APPLY TO YOU.</li>
            <li>11. Limitation of Liability. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL COMPANY OR ITS AFFILIATES, OR ANY OF ITS OR THEIR RESPECTIVE LICENSORS OR SERVICE PROVIDERS, HAVE ANY LIABILITY ARISING FROM OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APPLICATION OR THE CONTENT AND SERVICES FOR:</li>
            <ul>
                <li>(a) PERSONAL INJURY, PROPERTY DAMAGE, LOST PROFITS, COST OF SUBSTITUTE GOODS OR SERVICES, LOSS OF DATA, LOSS OF GOODWILL, BUSINESS INTERRUPTION, COMPUTER FAILURE OR MALFUNCTION OR ANY OTHER CONSEQUENTIAL, INCIDENTAL, INDIRECT, EXEMPLARY, SPECIAL OR PUNITIVE DAMAGES</li>
                <li>(b) DIRECT DAMAGES IN AMOUNTS THAT IN THE AGGREGATE EXCEED THE AMOUNT ACTUALLY PAID BY YOU FOR THE APPLICATION.</li>
            </ul>
            <li>THE FOREGOING LIMITATIONS WILL APPLY WHETHER SUCH DAMAGES ARISE OUT OF BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE AND REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE OR COMPANY WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS OF LIABILITY SO SOME OR ALL OF THE ABOVE LIMITATIONS OF LIABILITY MAY NOT APPLY TO YOU.</li>
            <li>12. Indemnification. You agree to indemnify, defend and hold harmless Company and its officers, directors, employees, agents, affiliates, successors, and assigns from and against any and all losses, damages, liabilities, deficiencies, claims, actions, judgments, settlements, interest, awards, penalties, fines, costs, or expenses of whatever kind, including reasonable attorneys’ fees, arising from or relating to your use or misuse of the Application or your breach of this Agreement. Furthermore, you agree that SSF assumes no responsibility for the content you submit or make available through this Application.</li>
            <li>13. Export Regulation. You may not use, export, or re-export the Application except as explicitly authorized by the terms of this Agreement, United States law, and the laws of the jurisdiction in which the Application was obtained. In particular, but without limitation, the Application may not be exported or re-exported (a) into any U.S. embargoed countries or (b) to anyone on the U.S. Treasury Department’s list of Specially Designated Nationals of the U.S. Department of Commerce Denied Person’s list or Entity List. By using the Application, you represent and warrant that you are not located in any such country or on any such list. You also agree that you will not use the Application in any way prohibited by federal, state, or local law.</li>
            <li>14. U.S. Government Rights. The Application is commercial computer software; as such term is defined in 48 C.F.R. §2.101. Accordingly, if you are an agency of the U.S. Government or any contractor therefor, you receive only those rights with respect to the Application as are granted to all other end users under license, in accordance with (a) 48 C.F.R. §227.7201 through 48 C.F.R. §227.7204, with respect to the Department of Defense and their contractors, or (b) 48 C.F.R. §12.212, with respect to all other U.S. Government licensees and their contractors.</li>
            <li>15. Severability. If any provision of this Agreement is found to be illegal or unenforceable under applicable law by a court of competent jurisdiction, the remainder of the provision will be amended to achieve as closely as possible the effect of the original term and all other provisions of this Agreement will continue in full force and effect.</li>
            <li>16. Governing Law. This Agreement is governed by and construed in accordance with the internal laws of the State of California without giving effect to any choice or conflict of law provision or rule. Any legal suit, action or proceeding arising out of or related to this Agreement or the Application shall be instituted exclusively in the federal courts of the United States or the courts of the State of California in each case located in San Diego. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.</li>
            <li>17. Limitation of Time to File Claims. ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APPLICATION MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES, OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED.</li>
            <li>18. Entire Agreement. This Agreement and SSF’s Application Privacy Policy constitute the entire agreement between you and SSF with respect to the Application and supersede all prior or contemporaneous understandings and agreements, whether written or oral, with respect to the Application.</li>
            <li>19. Waiver. No failure to exercise, and no delay in exercising, on the part of either party, any right or any power hereunder shall operate as a waiver thereof, nor shall any single or partial exercise of any right or power hereunder preclude further exercise of that or any other right hereunder. In the event of a conflict between this Agreement and any other terms, the terms of this Agreement shall govern.</li>
        </ul>
      </section>

      <Divider />

      <Footer />
    </main>
  )
}

export default EULAPage;