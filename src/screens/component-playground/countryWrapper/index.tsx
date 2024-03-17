import React from "react";
import { slow } from "@fox-components/slow-ui";

type PropsType = {
  country: string;
};

const CountryWrapper = (props: PropsType) => {
  const [countryData, setCountryData] = React.useState<{
    name: { common: string };
    flags: { svg: string };
    capital: Array<string>;
  }>({
    flags: { svg: undefined },
    name: { common: undefined },
    capital: [""],
  });

  React.useEffect(() => {
    setTimeout(() => {
      fetch(`https://restcountries.com/v3.1/name/${props.country}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCountryData(data[0]);
        });
    }, 1000);
  }, []);

  return (
    <div className="bg-zinc-900 p-4 rounded-3xl border-2 border-zinc-800/40">
      <slow.img
        width={300}
        height={180}
        borderRadius={15}
        src={countryData.flags.svg}
      />
      <slow.h3
        height={25}
        borderRadius={15}
        fontSize={20}
        fontWeight={700}
        width={200}
        marginTop={10}
      >
        {countryData.name.common}
      </slow.h3>
      <slow.h3
        height={16}
        borderRadius={15}
        fontSize={13}
        fontWeight={500}
        width={140}
        marginTop={5}
      >
        {countryData.capital[0].toUpperCase()}
      </slow.h3>
    </div>
  );
};

export default CountryWrapper;
