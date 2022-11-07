import {
  drugSearch_Header,
  caurosel_drugPage,
  important_data,
} from "../../../Resources/data";
import Footer from "../../Footer/footer";
import { images } from "../../../Resources/image";
import {
  DrugHeaderstyle,
  SearchBanner,
  CauroselSelectcontent,
  CauroselSelectEditicon,
  CauroselCoveragePlan,
  SelectTag,
  Inputcontainer,
  InputTag,
  SearchButton,
  ImportantDiv,
} from "../../Main/DrugFinder/drugpageStyle";
import {
  MedicineContainer,
  MedicineSubcontainer,
  MedicineRightcontainer,
  MedicineLeftcontainer,
  MedicineContainerImages,
  MedicineLeftcontainerDetail,
  MedicineLeftSubContainer,
  MedicineQuantity,
  MedicineQuantityInput,
  MedicinePharmacyButton,
  MedicinePharmacyButtonDiv,
  MedicineSelect,
  MedicineNotebreif,
  MedicineNotehead,
  AddButton,
  MedicineDate,
  MedicineDatecontainer,
} from "../DrugFinder/drugsearchliststyle";
import {
  Modal,
  Overlay,
  ModalContent,
  Header,
  ModalHead,
  ModalSubContent,
  Modalclose,
  Footercontent,
  Footerbutton,
  Footerbutton2,
} from "./Modalstyle";
import { useState, useRef, useContext } from "react";
import { AppContext } from "../../../Pharmacyprovider/Pharmacyprovider";
const Drug = () => {
  const contextType = useContext(AppContext);
  console.log(contextType.drugDetails, "drugs");
  const [searchterm, setsearchterm] = useState("");
  const [modal, setModal] = useState(false);
  const selectplan = useRef();
  const toggleYear = () => {
    if (selectplan.current.value === "Next Year") {
      setModal(!modal);
    }
  };
  return (
    <>
      <DrugHeaderstyle>{drugSearch_Header}</DrugHeaderstyle>
      <SearchBanner>
        <CauroselSelectcontent>
          <CauroselCoveragePlan>
            <p>{caurosel_drugPage.caurosel_Header}</p>

            <CauroselSelectEditicon src={images.edit}></CauroselSelectEditicon>
          </CauroselCoveragePlan>
          <CauroselCoveragePlan>
            <p>{caurosel_drugPage.caurosel_plan}&nbsp;</p>
            <SelectTag
              ref={selectplan}
              name="selectplan"
              id="selectplan"
              onChange={toggleYear}
            >
              <option>Current Year</option>
              <option>Next Year</option>
            </SelectTag>
            <>
              {modal && (
                <Modal>
                  <Overlay onClick={toggleYear}></Overlay>
                  <ModalContent>
                    <Header>
                      <ModalHead>
                        You are Choosing Next Year as Plan Coverage
                      </ModalHead>
                      <Modalclose
                        src={images.close}
                        onClick={toggleYear}
                        alt="close"
                      ></Modalclose>
                    </Header>
                    <ModalSubContent>
                      <p>
                        By continuing this, You may Loose already added details
                        of drugslist.{" "}
                      </p>
                      <h4>Do you want to Continue?</h4>
                    </ModalSubContent>
                    <Footercontent>
                      <Footerbutton onClick={toggleYear}>No</Footerbutton>
                      <Footerbutton2 onClick={toggleYear}>Yes</Footerbutton2>
                    </Footercontent>
                  </ModalContent>
                </Modal>
              )}
            </>
          </CauroselCoveragePlan>
        </CauroselSelectcontent>
        <p>{caurosel_drugPage.caurosel_head}</p>
        <h1>{caurosel_drugPage.caurosel_subhead}</h1>
        <Inputcontainer>
          <InputTag
            type="text"
            placeholder="search"
            onChange={(event) => {
              setsearchterm(event.target.value);
            }}
          ></InputTag>
          <SearchButton>Search</SearchButton>
        </Inputcontainer>
      </SearchBanner>
      {contextType.drugDetails
        .filter((val) => {
          if (searchterm == "") {
            return val;
          } else if (
            val.medicineTitle.toLowerCase().includes(searchterm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((val, key) => {
          return (
            <MedicineContainer>
              <div>
                <h2>{val.medicineTitle}</h2>
              </div>
              <MedicineSubcontainer>
                <MedicineLeftcontainer>
                  <div>
                    <h4>{val.medicineAlerts}</h4>
                  </div>
                  <MedicineLeftSubContainer>
                    <MedicineLeftcontainerDetail>
                      <div>
                        <MedicineContainerImages
                          src={images.dollar}
                        ></MedicineContainerImages>
                      </div>
                      <div>
                        <div>{val.medicineBreif}</div>
                        <div>{val.medicineOption}</div>
                      </div>
                    </MedicineLeftcontainerDetail>
                    <MedicineLeftcontainerDetail>
                      <div>
                        <MedicineContainerImages
                          src={images.prescription}
                        ></MedicineContainerImages>
                      </div>
                      <div>{val.medicineDescription}</div>
                    </MedicineLeftcontainerDetail>
                  </MedicineLeftSubContainer>
                </MedicineLeftcontainer>
                <MedicineRightcontainer>
                  <MedicineQuantity>
                    <div>{val.medicineQuantity}</div>
                    <MedicineQuantityInput type="number"></MedicineQuantityInput>
                  </MedicineQuantity>
                  <MedicineQuantity>
                    <div>{val.medicinePharmacyType}</div>
                    <MedicinePharmacyButtonDiv>
                      <MedicinePharmacyButton>
                        {val.medicinePharmacyTypeButon1}
                      </MedicinePharmacyButton>
                      <MedicinePharmacyButton>
                        {val.medicinePharmacyTypeButton2}
                      </MedicinePharmacyButton>
                    </MedicinePharmacyButtonDiv>
                  </MedicineQuantity>
                  <MedicineQuantity>
                    <div>{val.medicineRefil}</div>
                    <MedicineSelect>
                      <option>Every One Month</option>
                      <option>Every Six Month</option>
                      <option>Every One year</option>
                      <option>Every Two Year</option>
                    </MedicineSelect>
                  </MedicineQuantity>
                  <div>
                    <MedicineNotehead>{val.medicineNoteHead}</MedicineNotehead>
                    <MedicineNotebreif>{val.medicineNote}</MedicineNotebreif>
                    <MedicineDatecontainer>
                      <MedicineNotebreif>
                        {val.medicineAvailableText}
                      </MedicineNotebreif>
                      <MedicineDate>April 21,2022.</MedicineDate>
                    </MedicineDatecontainer>
                  </div>
                  <AddButton>{val.medicineButtonText}</AddButton>
                </MedicineRightcontainer>
              </MedicineSubcontainer>
            </MedicineContainer>
          );
        })}

      <ImportantDiv>
        <h4>{important_data.important_Head}</h4>
        <p>{important_data.important_Description}</p>
      </ImportantDiv>
      <Footer />
    </>
  );
};
export default Drug;
