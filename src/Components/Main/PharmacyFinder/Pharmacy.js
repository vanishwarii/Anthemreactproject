import {
  drugSearch_Header,
  caurosel_drugPage,
  important_data,
  pharmacyHeadercontent,
} from "../../../Resources/data";
import Pagination from "react-js-pagination";
import Footer from "../../Footer/footer";
import { images } from "../../../Resources/image";
import {
  DrugHeaderstyle,
  SearchBanner,
  CauroselSelectcontent,
  CauroselSelectEditicon,
  CauroselCoveragePlan,
  SelectTag,
} from "../../Main/DrugFinder/drugpageStyle";
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
} from "../DrugFinder/Modalstyle";
import { useLocation } from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";
import {
  Pharmacyinputcontainer,
  Pharmacyinputcontainerdiv,
  Pharmacycheckboxcontainer,
  Pharmacyinputmaincontainer,
  Expandhourscontsinerdiv,
  Sharediv,
  Radiocontainer,
  PharmacycontainerButton,
  Pharmactinputtag,
  PhramacyRightContainer,
  PharmacyHeaderH4tag,
  PharmacyContactdetail,
  PharmacyExtenteddetaildiv,
  PharmacyExtentviediv,
  PharmacyHoursDetailtag,
  PharmactButtonMaindiv,
  PharmacyDetaillist,
  Listdiv,
  Pharmacyinfodiv,
  Pharmactselecttag,
  PharmacyCount,
} from "../PharmacyFinder/Pharmacystyle";
import {
  PharmacyMainContainer,
  PharmacyLeftContainer,
  PharmacyLeftContainerList,
  PharmacyHeadTitle,
  PharmacyHeadAddress,
  PharmacyDetailimage,
  PharmacyDetailcontainer,
  PharmacyDetailCalldiv,
  PharmacybuttonContainer,
  PharmacttagButton,
  PharmacyLeftmainconatiner,
  PharmacycountHead,
} from "./Pharmacymainpagestyle";
import Paginationshow from "./pagination";
import { AppContext } from "../../../Pharmacyprovider/Pharmacyprovider";

const Pharmacy = () => {
  const contextType = useContext(AppContext);

  const all = useRef();
  const standard = useRef();
  const prefered = useRef();
  const hours = useRef();
  const selectplan = useRef();
  const [shown, isShown] = useState(false);
  const [valid, inValid] = useState(false);
  const [pharmacydetail, setPharmacyDetail] = useState(null);
  const [currentPharmacyId, showcurrentPharmacyId] = useState(0);
  const [modal, setModal] = useState(false);
  const [PageNumber, setPageNumber] = useState(1);
  const [Pageperitems, setPageperitems] = useState(10);

  useEffect(() => {
    setPharmacyDetail(contextType.pharmacyDetails);
    showcurrentPharmacyId(contextType?.pharmacyDetails?.[0]?.id ?? 1);
  }, []);

  const toggleYear = () => {
    if (selectplan.current.value === "Next Year") {
      setModal(!modal);
    }
  };
  const getData = (pharmacyId) => {
    showcurrentPharmacyId(pharmacyId);
  };
  const submit = (event) => {
    console.log(event, "submitbtn");
    if (
      hours.current.checked === true &&
      (all.current.checked === true ||
        standard.current.checked === true ||
        prefered.current.checked === true)
    ) {
      isShown(true);
      inValid(false);
    } else {
      isShown(false);
      inValid(true);
    }
  };

  if (!pharmacydetail) {
    return <p>Loading</p>;
  }

  const selectedPharmacy = contextType.pharmacyDetails.find(
    (pharmacy) => pharmacy.id === currentPharmacyId
  );

  const last = PageNumber * Pageperitems;
  const first = last - Pageperitems;
  console.log(last, "last");
  console.log();
  const displayUsers = contextType.pharmacyDetails.slice(first, last);
  console.log(displayUsers, "displayusers");

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
        <h1>{pharmacyHeadercontent.Pharmacy_Header}</h1>

        <Pharmacyinputmaincontainer>
          <Pharmacyinputcontainer>
            <Pharmacyinputcontainerdiv>
              <b> {pharmacyHeadercontent.Pharmacy_searchNameTitle}</b>
              <Pharmactinputtag type="text" />
            </Pharmacyinputcontainerdiv>
            <Pharmacyinputcontainerdiv>
              <b> {pharmacyHeadercontent.Pharmacy_SearchRadiusTitle}</b>

              <Pharmactselecttag id="radius">
                <option value="1">1 Mile</option>
                <option value="2">2 Mile</option>
                <option value="3">3 Mile</option>
                <option value="4">4 Mile</option>
                <option value="5">5 Mile</option>
              </Pharmactselecttag>
            </Pharmacyinputcontainerdiv>
            <Pharmacyinputcontainerdiv>
              <b>{pharmacyHeadercontent.Pharmacy_PharmacyType}</b>

              <Pharmactselecttag id="type">
                <option value="all">All</option>
                <option value="hospital">Hospital</option>
                <option value="clinical">Clinical</option>
                <option value="consulting">Consulting</option>
                <option value="industrial">Industrial</option>
              </Pharmactselecttag>
            </Pharmacyinputcontainerdiv>
          </Pharmacyinputcontainer>
          <Pharmacycheckboxcontainer>
            <Expandhourscontsinerdiv>
              <div>
                <b>{pharmacyHeadercontent.Pharmacy_ExtendedHours}</b>
              </div>
              <div>
                <input type="checkbox" ref={hours} />
                <label htmlFor="html">24 hours Pharmacy</label>
              </div>
            </Expandhourscontsinerdiv>
            <Sharediv>
              <div>
                <b>{pharmacyHeadercontent.Pharmacy_costShare}</b>
              </div>
              <Radiocontainer>
                <div>
                  <input
                    ref={all}
                    type="radio"
                    id="one"
                    name="radio"
                    value="All"
                  />
                  <label htmlFor="html">All</label>
                  <br></br>
                </div>
                <div>
                  <input
                    ref={standard}
                    type="radio"
                    id="one"
                    name="radio"
                    value="first"
                  />
                  <label htmlFor="html">Standard cost share</label>
                  <br></br>
                </div>
                <div>
                  <input
                    ref={prefered}
                    type="radio"
                    id="one"
                    name="radio"
                    value="first"
                  />
                  <label htmlFor="html">Prefered cost share</label>
                  <br></br>
                </div>
              </Radiocontainer>
            </Sharediv>
            <div>
              <PharmacycontainerButton onClick={submit}>
                {pharmacyHeadercontent.Pharmacy_SearchPharmacyButtonteaxt}
              </PharmacycontainerButton>
            </div>
          </Pharmacycheckboxcontainer>
        </Pharmacyinputmaincontainer>

        <div>{shown && <h4>{pharmacyHeadercontent.Pharmacy_Label}</h4>}</div>
      </SearchBanner>
      {shown && (
        <PharmacyMainContainer>
          <PharmacyLeftmainconatiner>
            <PharmacyLeftContainer>
              <PharmacycountHead>
                <PharmacyHeadTitle>
                  Available Pharmacies({contextType.pharmacyDetails.length})
                </PharmacyHeadTitle>
              </PharmacycountHead>

              {displayUsers.map((data) => {
                return (
                  <>
                    <PharmacyLeftContainerList
                      key={data.id}
                      onClick={() => getData(data.id)}
                    >
                      <div>
                        <PharmacyHeadTitle>
                          {data.Pharmacy_Name}
                          {data.id}
                        </PharmacyHeadTitle>
                        <PharmacyHeadAddress>
                          {data.Pharmacy_Address}
                        </PharmacyHeadAddress>
                        <PharmacyDetailcontainer>
                          <PharmacyDetailCalldiv>
                            <PharmacyDetailimage
                              src={images.call}
                            ></PharmacyDetailimage>
                            {data.Pharmacy_Phnumber}
                          </PharmacyDetailCalldiv>
                          <PharmacyDetailCalldiv>
                            <PharmacyDetailimage
                              src={images.location}
                            ></PharmacyDetailimage>

                            {data.pharmacy_Distance}
                          </PharmacyDetailCalldiv>
                        </PharmacyDetailcontainer>
                        <PharmacybuttonContainer>
                          <PharmacttagButton>
                            {data.Pharmacy_Tag1}
                          </PharmacttagButton>
                          <PharmacttagButton>
                            {data.Pharmacy_Tag2}
                          </PharmacttagButton>
                        </PharmacybuttonContainer>
                      </div>
                      <div></div>
                    </PharmacyLeftContainerList>
                  </>
                );
              })}
            </PharmacyLeftContainer>

            <Paginationshow
              totalPages={contextType.pharmacyDetails.length}
              postperPage={Pageperitems}
              setPageNumber={setPageNumber}
            ></Paginationshow>
          </PharmacyLeftmainconatiner>
          <PhramacyRightContainer>
            {selectedPharmacy && (
              <>
                <PharmacyHeaderH4tag>
                  {selectedPharmacy.Pharmacy_Name}
                </PharmacyHeaderH4tag>
                <div>{selectedPharmacy.Pharmacy_Address}</div>
                <PharmacyContactdetail>
                  <PharmacyDetailCalldiv>
                    <PharmacyDetailimage
                      src={images.call}
                    ></PharmacyDetailimage>
                    <div>{selectedPharmacy.Pharmacy_Phnumber}</div>
                  </PharmacyDetailCalldiv>
                  <PharmacyDetailCalldiv>
                    <PharmacyDetailimage
                      src={images.location}
                    ></PharmacyDetailimage>
                    <div>{selectedPharmacy.pharmacy_Distance}</div>
                  </PharmacyDetailCalldiv>
                </PharmacyContactdetail>
                <PharmacyExtenteddetaildiv>
                  <PharmacyExtentviediv>
                    <PharmacyHoursDetailtag>
                      {selectedPharmacy.Pharmacy_HoursTitle}
                    </PharmacyHoursDetailtag>
                    <div>{selectedPharmacy.Pharmacy_Hours}</div>
                  </PharmacyExtentviediv>
                  <PharmacyExtentviediv>
                    <PharmacyHoursDetailtag>
                      {selectedPharmacy.Pharmacy_TypeTitle}
                    </PharmacyHoursDetailtag>
                    <div>{selectedPharmacy.Pharmacy_Type}</div>
                  </PharmacyExtentviediv>
                </PharmacyExtenteddetaildiv>
                <PharmacyHoursDetailtag>
                  {selectedPharmacy.Pharmacy_TypeHead}
                </PharmacyHoursDetailtag>
                <PharmactButtonMaindiv>
                  <PharmacttagButton>
                    {selectedPharmacy.Pharmacy_Tag1}
                  </PharmacttagButton>
                  <PharmacttagButton>
                    {selectedPharmacy.Pharmacy_Tag2}
                  </PharmacttagButton>
                  <PharmacttagButton>
                    {selectedPharmacy.Pharmacy_Tag3}
                  </PharmacttagButton>
                  <PharmacttagButton>
                    {selectedPharmacy.Pharmacy_Tag4}
                  </PharmacttagButton>
                </PharmactButtonMaindiv>

                <div>
                  <PharmacyDetaillist>
                    <li>{selectedPharmacy.Pharmacy_about1}</li>
                    <li>{selectedPharmacy.Pharmacy_about2}</li>
                  </PharmacyDetaillist>
                </div>

                <PharmacyHoursDetailtag>
                  {selectedPharmacy.Pharmacy_costsshareHead}
                </PharmacyHoursDetailtag>
                <Listdiv>
                  <PharmacyDetaillist>
                    <li>{selectedPharmacy.Pharmacy_CostShare1}</li>
                    <li>{selectedPharmacy.Pharmacy_CostShare2}</li>
                    <li>{selectedPharmacy.Pharmacy_CostShare3}</li>
                    <li>{selectedPharmacy.Pharmacy_CostShare4}</li>
                    <li>{selectedPharmacy.Pharmacy_CostShare5}</li>
                  </PharmacyDetaillist>
                  <PharmacyDetaillist>
                    <li>{selectedPharmacy.Pharmacy_CostShare1}</li>
                    <li>{selectedPharmacy.Pharmacy_CostShare2}</li>
                    <li>{selectedPharmacy.Pharmacy_CostShare3}</li>
                    <li>{selectedPharmacy.Pharmacy_CostShare4}</li>
                  </PharmacyDetaillist>
                </Listdiv>

                <PharmacyHoursDetailtag>
                  {selectedPharmacy.Pharmacy_standardCostshareTitle}
                </PharmacyHoursDetailtag>
                <Listdiv>
                  <PharmacyDetaillist>
                    <li>{selectedPharmacy.Pharmacy_CostShare1}</li>
                    <li>{selectedPharmacy.Pharmacy_CostShare2}</li>
                  </PharmacyDetaillist>
                  <PharmacyDetaillist>
                    <li>{selectedPharmacy.Pharmacy_CostShare1}</li>
                    <li>{selectedPharmacy.Pharmacy_CostShare2}</li>
                  </PharmacyDetaillist>
                </Listdiv>
                <Pharmacyinfodiv>
                  <div>{selectedPharmacy.PharmacymedicineInfo}</div>
                  <div>{selectedPharmacy.Pharmacy_Date}</div>
                </Pharmacyinfodiv>
                <div>
                  <h4>{selectedPharmacy.Pharmacy_InfoHead}</h4>
                  <p>{selectedPharmacy.Pharmacy_info}</p>
                </div>
              </>
            )}
          </PhramacyRightContainer>
        </PharmacyMainContainer>
      )}

      {valid && <PharmacyCount>Please select your preference...</PharmacyCount>}

      <Footer />
    </>
  );
};
export default Pharmacy;
