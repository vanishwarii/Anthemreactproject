import { legalData } from "../../Resources/data";
import {FooterContent,Footerlabel,Footerhead,Footersubhead,Footerdescription} from '../Footer/footerStyle'
const Footer=()=>{
    return(
        <FooterContent>
        <Footerlabel>{legalData.legalNote}</Footerlabel>
        <Footerhead>{legalData.legal_Head}</Footerhead>
        <Footersubhead>{legalData.legalContent}</Footersubhead>
        <Footerdescription>{legalData.legalDescription}</Footerdescription>
        </FooterContent>
    )
}
export default Footer;