var HorizontalFlastlistDataStatus = 
{
  rainy: {
    ios: "ios-rainy"
  },
  cloud: {
    ios: "ios-cloud"
  },
  sunny: {
    ios: "ios-sunny"
  },
  thunderstorm: {
    ios: "ios-thunderstorm"
  }
}
var HorizontalFlastlistData = [
  {
    hour : "1 AM",
    status : HorizontalFlastlistDataStatus.rainy,
    degreess : 54
  },
  {
    hour : "4 AM",
    status : HorizontalFlastlistDataStatus.cloud,
    degreess : 12
  },
  {
    hour : "2 AM",
    status : HorizontalFlastlistDataStatus.sunny,
    degreess : 45
  },
  {
    hour : "6 AM",
    status : HorizontalFlastlistDataStatus.thunderstorm,
    degreess : 56
  },
  {
    hour : "7 AM",
    status : HorizontalFlastlistDataStatus.rainy,
    degreess : 56
  },
  {
    hour : "3 AM",
    status : HorizontalFlastlistDataStatus.cloud,
    degreess : 36
  },
  
];
export {HorizontalFlastlistData};
export {HorizontalFlastlistDataStatus};