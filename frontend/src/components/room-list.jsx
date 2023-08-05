import roomImage from "../images/room.jpg";
import Button from "@mui/material/Button";
export const RoomList = ({ room }) => {
  const { amenities, description, price, type, picture } = room;

  return (
    <div className="h-fit grid grid-cols-3 grid-rows-1 mb-6  border-4 border-[#491098] rounded-lg">
      <img src={picture} alt="room" className="h-full object-cover" />
      <div className="col-span-2 px-8 pt-4 flex flex-col content-between justify-center ">
        <h1 className="font-bold text-lg">{type}</h1>
        <p className="mt-3">{description}</p>
        <ul className="list-inside list-disc grid grid-cols-2 mt-2">
          {amenities
            ? amenities.map((ameni) => {
                return <li>{ameni}</li>;
              })
            : null}
        </ul>
        <div className="flex items-center justify-between h-[50px]">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#491098",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#491070",
              },
            }}>
            BOOK NOW
          </Button>
          <p className=" border border-[#491098] rounded p-2">
            {price}$/NIGHT
          </p>
        </div>
      </div>
    </div>
  );
};
