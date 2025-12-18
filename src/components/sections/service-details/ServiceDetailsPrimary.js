"use client";

import BlogSidebar from "@/components/shared/sidebars/BlogSidebar";
import useSearch from "@/hooks/useSearch";
import getAllServices from "@/libs/getAllServices";
import CommonContext from "@/providers/CommonContext";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import serviceDetailsImage1 from "@/assets/img/service/service__details__1.png";
import serviceDetailsImage2 from "@/assets/img/service/service__details__2.png";
const ServiceDetailsPrimary = () => {
  const { id: currentId } = useParams();
  const services = getAllServices();
  const currentService = services?.find(({ id }) => id === currentId);

  const { 
    title, 
    desc, 
    detailsImg, 
    text1, 
    text2, 
    planningTitle, 
    planningText1, 
    planningText2, 
    executionTitle, 
    executionText 
  } = currentService;
  
  const {
    searchString,
    searchedItems,
    previousSearchedItems,
    isShowSearch,
    handleSearch,
    handleSearchString,
    startSearch,
    closeSearch,
    isShowQuickSearchResult,
    setIsShowQuickSearchResult,
  } = useSearch(services, "/services");
  return (
    <div className="service__details sp_top_140 sp_bottom_160">
      <div className="container">
        <div className="row">
          
          <div className="col-xl-8 col-lg-8 col-md-12 col-12">
            <div className="service__details__wraper">
              <div
                className="service__details__img"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <Image src={detailsImg} alt="" placeholder="blur" />
              </div>
              <div
                className="service__details__heading"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h4>{title}</h4>
              </div>
              <div
                className="service__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>{text1}</p>
                <p>{text2}</p>
              </div>
              <div
                className="service__details__planning"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="service__details__planning__img">
                      <Image
                        src={serviceDetailsImage2}
                        alt=""
                        placeholder="blur"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="service__details__planning__inner">
                      <div className="service__details__planning__heading">
                        <h6>{planningTitle}</h6>
                      </div>
                      <div className="service__details__planning__text">
                        <p>{planningText1}</p>
                        <p>{planningText2}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="service__details__heading"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h4>{executionTitle}</h4>
              </div>
              <div
                className="service__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>{executionText}</p>
              </div>
              <div
                className="service__details__button"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <Link className="default__button btn__pink" href="/contacto">
                  Quiero Cotizar el Servicio
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-12">
            <CommonContext
              value={{
                searchedItems,
                handleSearch,
                handleSearchString,
                startSearch,
                closeSearch,
                isShowSearch,
                sidebar: "service",
                isShowQuickSearchResult,
                setIsShowQuickSearchResult,
              }}
            >
              <BlogSidebar sidebar={"service"} />
            </CommonContext>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPrimary;
