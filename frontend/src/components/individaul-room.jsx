import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Book from "./book";
export const IndividualRoom = ({ room }) => {
  const {
    _id,
    amenities,
    description,
    price,
    type,
    picture,
    room_num,
    beds,
  } = room;
  return (
    <div className="max-w-[1100px] w-full mx-auto border rounded-lg my-4">
      <img src={picture} className="aspect-video" alt="room" />
      <div className="bg-[#14274A] text-center h-[80px] text-4xl text-background font-semibold flex justify-center items-center  ">
        {type}
      </div>
      <div>
        <Accordion
          style={{
            border: "none",
            boxShadow: "none",
            width: "100%",
            padding: "0px 20px 0px 20px",
          }}>
          <AccordionSummary>
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="41"
                  viewBox="0 0 51 51"
                  fill="none">
                  <circle
                    cx="25.5"
                    cy="25.5"
                    r="25.5"
                    fill="#E0B973"
                  />
                  <line
                    x1="26.5"
                    y1="11"
                    x2="26.5"
                    y2="41"
                    stroke="white"
                    strokeWidth="3"
                  />
                  <line
                    x1="41"
                    y1="26.5"
                    x2="11"
                    y2="26.5"
                    stroke="white"
                    strokeWidth="3"
                  />
                </svg>
                <p className="ml-2 text-xl font-semibold">
                  View More Details
                </p>
              </div>
            </div>
            <div className="w-[200px] h-[66px] bg-[#E0B973] rounded-md text-background flex items-center justify-center text-xl font-semibold">
              $ {price} / Per Night
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className=" grid grid-cols-2 mt-2">
              <Typography variant="h5" gutterBottom>
                Room No-{room_num}
              </Typography>
              <div>
                {beds &&
                  beds.map((bed, index) => {
                    return (
                      <Typography
                        variant="h5"
                        gutterBottom
                        key={index}>
                        {bed.type} Size Bed
                      </Typography>
                    );
                  })}
              </div>
            </div>
            <p className="font-semibold text-xl">{description}</p>
            <ul className="list-inside list-disc grid grid-cols-2 mt-2">
              {amenities
                ? amenities.map((ameni) => {
                    return (
                      <li
                        className="font-semibold text-lg"
                        key={ameni}>
                        {ameni}
                      </li>
                    );
                  })
                : null}
            </ul>

            <div className="flex justify-center mt-4">
              <Book roomId={_id} price={price} />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
