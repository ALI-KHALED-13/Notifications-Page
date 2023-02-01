

export const convertToPeriod =(date)=>{
  
  const conversionConfigs = [
    {notation: "year", daysComponent: 365 },
    {notation: "month", daysComponent: 30},
    {notation: "week", daysComponent: 7},
    {notation: "day", daysComponent: 1},
    {notation: "hr", daysComponent: 1/24},
    {notation: "m", daysComponent: 1/(24*60)}
  ];

  let durationString = "";

  for (let periodConfig of conversionConfigs){
    const period = Math.floor((new Date() - new Date(date)) / (periodConfig.daysComponent*24*60*60*1000));
    if (period >= 1){
      durationString = stringifyPeriod(period, periodConfig.notation, periodConfig.notation !== "m");
      break;
    }
  }

  return durationString;
  
}

const stringifyPeriod =(period, notation, pluralize)=> {
  const numberNotationSeparator = ["m", "hr"].includes(notation)? "":" ";
  const pluralS = pluralize && period > 1? "s":"";
  return period + numberNotationSeparator + notation + pluralS;
}