import React from "react";
import Sandesh from "../Ladies Photo - Japanese Girl.jpg";

function MyCard() {
  return (
    <>
      <div className="flex flex-col bg-slate-200 p-6 rounded m-6">
        <h3 className="font-bold uppercase ">Hamro Cart</h3>
        <div className="flex flex-row">
          <p className="text-justify mr-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            harum impedit quis rem sunt inventore culpa nam, et cum nesciunt
            laborum deleniti veritatis animi officia doloribus fugiat adipisci
            consequatur quibusdam totam commodi non? Corporis, excepturi.
            Repudiandae ea iure, delectus nesciunt ipsam, a cumque assumenda
            dolorum deserunt eum consequatur, recusandae incidunt beatae labore
            ducimus mollitia. Quod omnis error cumque eum ab reiciendis libero
            sed consequatur qui, praesentium totam accusantium. Expedita magnam,
            atque nam corporis neque vel quis hic quia magni est doloremque
            temporibus excepturi possimus unde ea beatae deserunt iusto ipsum
            quam odio assumenda amet. Veniam incidunt non repellendus nesciunt
            illum. Nostrum sunt, aut nobis corrupti quaerat ea sint, quis optio
            repellendus similique labore recusandae. Fugit laboriosam debitis
            dolorum, deleniti, quod cum in consequuntur ab similique
            exercitationem nam sequi deserunt omnis beatae optio sunt ea iure
            eius enim impedit excepturi recusandae voluptatum possimus
            cupiditate. Ullam sit provident labore laudantium nulla aspernat
          </p>
          <img src={Sandesh} alt="ktko photo" height={140} width={140} />
        </div>

        <input
          className="p-3 w-full mt-5"
          type="text"
          placeholder="Enter The Name"
        />
        <br />
        <button className="flex justify-center w-52 bg-gray-300 mt-4 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          <img
            className="w-5 h-5 mr-2 mt-0.5"
            src="https://img.icons8.com/?size=512&id=24717&format=png"
            alt="icon"
          />
          <span>Add To Cart</span>
        </button>
      </div>
    </>
  );
}

export default MyCard;
