import { headingTitle, providerData, drugData } from "../../Resources/data";
import { useNavigate } from "react-router-dom";
import {
  Content,
  SearchHeader,
  CardContent,
  ContentWrapper,
  Button,
  CardDescription,
  Img,
  CardHeader,
  Pharmacygroupbutton,
} from "./maincontentStyle";
import Footer from "../Footer/footer";
import Headercontent from "../Header/header";
import { images } from "../../Resources/image";
const MainContent = () => {
  const drugNavigation = useNavigate();
  const PharmacyNavigation = useNavigate();

  const goToDrugPage = () => {
    drugNavigation("/drug");
  };
  const goToPharmacyPage = () => {
    PharmacyNavigation("/Pharmacy");
  };

  return (
    <>
      <Headercontent />
      <Content>
        <SearchHeader>{headingTitle.search_Header}</SearchHeader>
        <CardContent>
          <ContentWrapper>
            <CardHeader>
              <Img src={images.sethescope}></Img>
              <h3>{providerData.provider_head}</h3>
            </CardHeader>
            <CardDescription>
              {providerData.provider_description}
            </CardDescription>
            <Button>{providerData.provider_button}</Button>
          </ContentWrapper>
          <ContentWrapper>
            <CardHeader>
              <Img src={images.medicine}></Img>
              <h3>{drugData.drug_head}</h3>
            </CardHeader>
            <CardDescription>{drugData.drug_description}</CardDescription>
            <Pharmacygroupbutton>
              <Button onClick={goToDrugPage}>{drugData.drug_button}</Button>
              <Button onClick={goToPharmacyPage}>
                {drugData.Pharmacy_button}
              </Button>
            </Pharmacygroupbutton>
          </ContentWrapper>
        </CardContent>
      </Content>
      <Footer />
    </>
  );
};
export default MainContent;
