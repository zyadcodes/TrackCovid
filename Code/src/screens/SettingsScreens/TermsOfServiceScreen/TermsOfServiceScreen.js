import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import BackButton from '../../../components/BackButton/BackButton'
import AppInfoScreen from '../../../components/AppInfoScreen/AppInfoScreen'
import strings from '../../../config/strings'

const TermsOfServiceScreen = (props) => {
    return (
        <AppInfoScreen
            navigation={props.navigation}
            title={strings.TermsOfService}
            information='END USER LICENSE AGREEMENT

            Last updated 7/5/2020
            
            
            
            TrackCovid is licensed to You (End-User) by TrackCovid, located at Seattle, Washington, USA (hereinafter: Licensor), for use only under the terms of this License Agreement.
            
            By downloading the Application from the Apple AppStore, and any update thereto (as permitted by this License Agreement), You indicate that You agree to be bound by all of the terms and conditions of this License Agreement, and that You accept this License Agreement.
            
            The parties of this License Agreement acknowledge that Apple is not a Party to this License Agreement and is not bound by any provisions or obligations with regard to the Application, such as warranty, liability, maintenance and support thereof. TrackCovid, not Apple, is solely responsible for the licensed Application and the content thereof.
            
            This License Agreement may not provide for usage rules for the Application that are in conflict with the latest App Store Terms of Service. TrackCovid acknowledges that it had the opportunity to review said terms and this License Agreement is not conflicting with them.
            
            All rights not expressly granted to You are reserved.
            
            
            1. THE APPLICATION
            
            TrackCovid (hereinafter: Application) is a piece of software created to inform users of current coronavirus statistics globally and to a certain extent, locally - and customized for Apple mobile devices. It is used to view daily updated coronavirus statistics.
            
            
            2. SCOPE OF LICENSE
            
            
            3. TECHNICAL REQUIREMENTS
            
            
            4. NO MAINTENANCE OR SUPPORT
            
            4.1  TrackCovid is not obligated, expressed or implied, to provide any maintenance, technical or other support for the Application.
            
            4.2  TrackCovid and the End-User acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the licensed Application.
            
            
            5. LIABILITY
            
            
            6. WARRANTY
            
            6.1  Licensor warrants that the Application is free of spyware, trojan horses, viruses, or any other malware at the time of Your download. Licensor warrants that the Application works as described in the user documentation.
            
            6.2  No warranty is provided for the Application that is not executable on the device, that has been unauthorizedly modified, handled inappropriately or culpably, combined or installed with inappropriate hardware or software, used with inappropriate accessories, regardless if by Yourself or by third parties, or if there are any other reasons outside of TrackCovid’s sphere of influence that affect the executability of the Application.
            
            6.3  You are required to inspect the Application immediately after installing it and notify TrackCovid about issues discovered without delay by e-mail provided in Product Claims. The defect report will be taken into consideration and further investigated if it has been mailed within a period of 90 days after discovery.
            
            6.4  If we confirm that the Application is defective, TrackCovid reserves a choice to remedy the situation either by means of solving the defect or substitute delivery.
            
            6.5  In the event of any failure of the Application to conform to any applicable warranty, You may notify the App-Store-Operator, and Your Application purchase price will be refunded to You. To the maximum extent permitted by applicable law, the App-Store-Operator will have no other warranty obligation whatsoever with respect to the App, and any other losses, claims, damages, liabilities, expenses and costs attributable to any negligence to adhere to any warranty.
            
            6.6  If the user is an entrepreneur, any claim based on faults expires after a statutory period of limitation amounting to twelve (12) months after the Application was made available to the user. The statutory periods of limitation given by law apply for users who are consumers.
            
            7. PRODUCT CLAIMS
            
            TrackCovid and the End-User acknowledge that TrackCovid, and not Apple, is responsible for addressing any claims of the End-User or any third party relating to the licensed Application or the End-User’s possession and/or use of that licensed Application, including, but not limited to:
            
            (i) product liability claims;
            
            (ii) any claim that the licensed Application fails to conform to any applicable legal or regulatory requirement; and
            
            (iii) claims arising under consumer protection, privacy, or similar legislation, including in connection with Your Licensed Application’s use of the HealthKit and HomeKit.
            
            
            8. LEGAL COMPLIANCE
            
            You represent and warrant that You are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a "terrorist supporting" country; and that You are not listed on any U.S. Government list of prohibited or restricted parties.
            
            
            9. CONTACT INFORMATION                  
            
            For general inquiries, complaints, questions or claims concerning the licensed Application, please contact:
                 
            contacttrackcovid@gmail.com
            
            10. TERMINATION
            
            The license is valid until terminated by TrackCovid or by You. Your rights under this license will terminate automatically and without notice from TrackCovid if You fail to adhere to any term(s) of this license. Upon License termination, You shall stop all use of the Application, and destroy all copies, full or partial, of the Application.
            
            12. INTELLECTUAL PROPERTY RIGHTS
            
            TrackCovid and the End-User acknowledge that, in the event of any third-party claim that the licensed Application or the End-User’s possession and use of that licensed Application infringes on the third party’s intellectual property rights, TrackCovid, and not Apple, will be solely responsible for the investigation, defense, settlement and discharge or any such intellectual property infringement claims.
            
            
            13. APPLICABLE LAW
            
            This license agreement is governed by the laws of Washington, USA excluding its conflicts of law rules.
            
            
            14. MISCELLANEOUS
            
            14.1  If any of the terms of this agreement should be or become invalid, the validity of the remaining provisions shall not be affected. Invalid terms will be replaced by valid ones formulated in a way that will achieve the primary purpose.
                         
            14.2  Collateral agreements, changes and amendments are only valid if laid down in writing. The preceding clause can only be waived in writing.
               
            These terms of use were created using Termly’s Terms and Conditions Generator.'
        />
    )
}

export default TermsOfServiceScreen

