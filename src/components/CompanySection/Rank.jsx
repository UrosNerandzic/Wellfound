"use client";
import wp from "../../../public/image/icon/wp.jpg";
import meta from "../../../public/image/icon/meta.jpg";
import Tippy from "@tippyjs/react";
import Image from "next/image";
function Rank({ data }) {
  return (
    <ul className="styles_component__5DMnC mt-4 !px-0">
      {Array.isArray(data.rank) &&
        data.rank.some((rank) => /Actively Hiring/i.test(rank)) && (
          <Tippy content={"Actively processing applications"}>
            <li className="styles_component__ejzCg styles_green__WjXVr">
              <div className="styles_flair__E5CBI">
                <div className="styles_checkmarkHolder__xKWH_">
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="styles_checkmark__qEPVA">
                    <path
                      d="M5.91 10.496L3.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.493-.09l7-8a1 1 0 10-1.572-1.235L5.91 10.496z"
                      fill="currentColor"></path>
                  </svg>
                </div>
              </div>
              Actively Hiring
            </li>
          </Tippy>
        )}
      {Array.isArray(data.rank) &&
        data.rank.some((rank) => /Recently funded/i.test(rank)) && (
          <Tippy content={"Actively processing applications"}>
            <li className="styles_component__ejzCg styles_green__WjXVr">
              <div className="styles_flair__E5CBI">
                <div className="styles_checkmarkHolder__xKWH_">
                  <svg height="14" width="8">
                    <path
                      d="M7.578 9.392A2.794 2.794 0 005.81 6.784l-2.975-1.19a1.059 1.059 0 01.394-2.04h2.93a.875.875 0 100-1.75H5.02a.146.146 0 01-.145-.147V.875a.875.875 0 10-1.75 0v.8c0 .076-.058.139-.133.146a2.8 2.8 0 00-.8 5.397l2.975 1.189a1.059 1.059 0 01-.394 2.042H1.838a.875.875 0 100 1.75H2.98c.08 0 .146.065.146.146v.78a.875.875 0 101.75 0v-.8c0-.076.058-.139.133-.146a2.806 2.806 0 002.57-2.787z"
                      fill="currentColor"
                      fillRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              Recently funded
            </li>
          </Tippy>
        )}
      {Array.isArray(data.rank) &&
        data.rank.some((rank) => /Same investor as Meta/i.test(rank)) && (
          <Tippy content={"Actively processing applications"}>
            <li className="styles_component__ejzCg styles_green__WjXVr">
              <div className="styles_flair__E5CBI">
                <div className="styles_checkmarkHolder__xKWH_">
                  <Image
                    src={meta}
                    alt="meta"
                    width={14}
                    height={14}
                    style={{ width: "14px", height: "14px" }}
                  />
                </div>
              </div>
              Same investor as Meta
            </li>
          </Tippy>
        )}
      {Array.isArray(data.rank) &&
        data.rank.some((rank) => rank.includes("Highly rated")) && (
          <Tippy
            content={
              "Earnln is highly rated on Glassdoor, with 4.7 out of 5 stars"
            }>
            <li className="styles_component__ejzCg styles_orange__lheFk">
              <div className="styles_flair__E5CBI">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="haloIcon w-4 max-w-full">
                  <path
                    d="M5 22a3 3 0 01-3-3v-6a3 3 0 013-3h1.381l3.172-6.342a3 3 0 012.484-1.651l.2-.007h.263a2.5 2.5 0 012.495 2.336L15 4.5V10h3.998a3 3 0 012.971 3.415l-.029.173-1.2 6a3 3 0 01-2.764 2.407l-.178.005H5zm1-10H5a1 1 0 00-1 1v6a1 1 0 001 1h1v-8zm6.5-8h-.264a1 1 0 00-.832.445l-.062.108-3.236 6.472a1 1 0 00-.1.331L8 11.472V20h9.798a1 1 0 00.951-.69l.03-.114 1.2-6a1 1 0 00-.785-1.177l-.097-.014-.099-.005H15a2 2 0 01-1.995-1.85L13 10V4.5a.5.5 0 00-.41-.492L12.5 4z"
                    fill="currentColor"></path>
                </svg>
                <span className="ml-1">
                  {data.rank
                    .find((rank) => rank.includes("Highly rated"))
                    ?.match(/(\d+\.\d+)\sHighly rated/)?.[1] || ""}
                </span>
              </div>
              Highly rated
            </li>
          </Tippy>
        )}
      {Array.isArray(data.rank) &&
        data.rank.some((rank) => /growing fast/i.test(rank)) && (
          <Tippy content={"Showed strong hiring growth in the past month"}>
            <li className="styles_component__ejzCg styles_purple__dZx1_">
              <div className="styles_flair__E5CBI">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="haloIcon w-4 max-w-full">
                  <path
                    d="M3.613 17.79l.094-.083L10 11.415l3.293 3.292a1 1 0 001.32.083l.094-.083L19 10.415l1.293 1.292c.602.603 1.614.22 1.701-.593L22 11l-.002-4.06-.009-.087-.025-.119-.024-.076-.034-.081-.052-.098-.067-.096-.08-.09a1.014 1.014 0 00-.112-.097l-.11-.071-.114-.054-.105-.035-.117-.025-.06-.007L21 6h-4c-.852 0-1.297.986-.783 1.623l.076.084L17.585 9 14 12.585l-3.293-3.292a1 1 0 00-1.32-.083l-.094.083-7 7a1 1 0 001.32 1.497z"
                    fill="currentColor"></path>
                </svg>
              </div>
              GROWING FAST
            </li>
          </Tippy>
        )}
      {Array.isArray(data.rank) &&
        data.rank.some((rank) =>
          /Same investor as Warby Parker/i.test(rank)
        ) && (
          <Tippy
            content={
              "Felicis Ventures invested in both Earnin and Warby Parker"
            }>
            <li className="styles_component__ejzCg styles_green__WjXVr">
              <div className="styles_flair__E5CBI">
                <div className="styles_avatar__KzFhv inline-flex flex-row items-center relative border border-gray-400 bg-gray-100 rounded-md h-4 w-4 styles_avatar__KzFhv">
                  <Image
                    src={wp}
                    alt="WP"
                    width={14}
                    height={14}
                    style={{ width: "14px", height: "14px" }}
                  />
                </div>
              </div>
              Same investor as Warby Parker
            </li>
          </Tippy>
        )}
      {Array.isArray(data.rank) &&
        data.rank.some((rank) => /Life Balance/i.test(rank)) && (
          <Tippy
            content={
              "Employees rate Earnln 4.7/5 on Glassdoor for work / life balance"
            }>
            <li className="styles_component__ejzCg styles_purple__dZx1_">
              <div className="styles_flair__E5CBI">
                <svg height="15" viewBox="0 0 16 15" width="16">
                  <g fill="currentColor">
                    <path d="M3.44 1.433l1.854.737c.04.015.08.023.123.023a8.994 8.994 0 012.527.351c.063.019.13.019.192 0a9.117 9.117 0 013.207-.323.333.333 0 00.149-.022l1.988-.792a.504.504 0 00.053-.913 3.551 3.551 0 00-3.6.06 3.4 3.4 0 00-1.356 1.45.167.167 0 01-.302 0A3.4 3.4 0 006.953.574a3.56 3.56 0 00-3.56-.12.539.539 0 00.047.98zM7.68 6.967h.56c.18 0 .326-.14.334-.319l.024-.557a.333.333 0 00-.168-.304 2.555 2.555 0 01-.2-.126.333.333 0 00-.373 0c-.245.163-.506.3-.779.409a.333.333 0 00-.166.148L4.898 9.874a.333.333 0 00.323.493 14.856 14.856 0 012.83 0 .333.333 0 00.364-.318l.017-.4a.333.333 0 00-.333-.348h-.752a.333.333 0 010-.667h.815c.178 0 .325-.14.333-.317l.016-.334a.333.333 0 00-.334-.349H7.68a.333.333 0 110-.667zM6.647 10.967c-2.771 0-5.871.756-6.263 2.879a.667.667 0 00.656.787h11.404a.5.5 0 00.498-.54c-.184-2.304-3.373-3.126-6.295-3.126z"></path>
                    <path d="M15.565 5.385c-1.506-2.908-5.496-2.828-7.467-2.124a.162.162 0 01-.112 0C6.011 2.556 2.021 2.476.515 5.386a.537.537 0 00.451.785c.278.014.59.022.927.022 1.666 0 4.907-.218 6.024-1.448a.168.168 0 01.246 0c1.116 1.229 4.354 1.448 6.024 1.448.334 0 .649-.008.926-.022a.537.537 0 00.452-.786z"></path>
                  </g>
                </svg>
                <span className="styles_rating__7kGAZ">
                  {data.rank
                    .find((rank) => rank.includes("Life Balance"))
                    ?.match(/(\d+\.\d+)\sWork/)?.[1] || ""}
                </span>
              </div>
              Work / Life Balance
            </li>
          </Tippy>
        )}
      {Array.isArray(data.rank) &&
        data.rank.some((rank) => /Strong Leadership/i.test(rank)) && (
          <Tippy
            content={
              "Employees rate Earnln 4.3/5 on Glassdoor for faith in leadership"
            }>
            <li className="styles_component__ejzCg styles_purple__dZx1_">
              <div className="styles_flair__E5CBI">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  className="styles_icon__XeSiG"
                  clipRule="evenodd">
                  <path
                    d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM22 12C22 17.5228 17.5229 22 12 22C6.47717 22 2.00002 17.5228 2.00002 12C2.00002 6.47714 6.47717 1.99999 12 1.99999C17.5229 1.99999 22 6.47714 22 12ZM17.2567 6.02059C17.4411 6.06514 17.6086 6.1622 17.739 6.30002C17.87 6.43715 17.9584 6.60938 17.9933 6.79578C18.0283 6.98218 18.0084 7.17473 17.936 7.35002L15.211 13.892C15.0884 14.1878 14.9087 14.4565 14.6822 14.6828C14.4557 14.9091 14.1869 15.0886 13.891 15.211L7.349 17.937C7.17347 18.0105 6.98034 18.0312 6.7932 17.9968C6.60607 17.9623 6.43301 17.8741 6.29516 17.7429C6.15731 17.6118 6.06063 17.4433 6.01691 17.2581C5.9732 17.0729 5.98435 16.879 6.049 16.7L8.477 9.95202C8.5986 9.61229 8.79406 9.30377 9.0493 9.04871C9.30453 8.79364 9.61319 8.59839 9.953 8.47702L16.7 6.04902C16.8789 5.98591 17.0723 5.97604 17.2567 6.02059ZM11.0478 13.4252C11.3296 13.6135 11.661 13.714 12 13.714C12.4544 13.7135 12.8901 13.5327 13.2114 13.2114C13.5327 12.8901 13.7135 12.4544 13.714 12C13.714 11.661 13.6135 11.3296 13.4251 11.0478C13.2368 10.7659 12.9691 10.5462 12.6559 10.4165C12.3427 10.2868 11.9981 10.2528 11.6656 10.319C11.3331 10.3851 11.0277 10.5483 10.788 10.788C10.5483 11.0277 10.3851 11.3332 10.3189 11.6656C10.2528 11.9981 10.2867 12.3427 10.4165 12.6559C10.5462 12.9691 10.7659 13.2368 11.0478 13.4252Z"
                    fill="currentColor"
                    fillRule="evenodd"></path>
                </svg>
                <span className="styles_rating__7kGAZ">
                  {" "}
                  {data.rank
                    .find((rank) => rank.includes("Strong Leadership"))
                    ?.match(/(\d+\.\d+)\sStrong Leadership/)?.[1] || ""}
                </span>
              </div>
              Strong Leadership
            </li>
          </Tippy>
        )}
    </ul>
  );
}

export default Rank;
