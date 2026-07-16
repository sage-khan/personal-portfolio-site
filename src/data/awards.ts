export type Award = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  detail: string;
  url?: string;
};

export const awards: Award[] = [
  { id: "marka-e-haq", name: "Tamgha-e-Marka-e-Haq", issuer: "Pakistan Navy", date: "16 May 2025", detail: "Awarded in recognition of service and operational readiness during the Pakistan–India standoff (Marka-e-Haq Day, 10 May 2025).", url: "https://www.moib.gov.pk/News/65437/" },
  { id: "diamond-jubilee", name: "Pakistan Diamond Jubilee Medal", issuer: "Pakistan Navy", date: "26 Jan 2023", detail: "Received for distinguished service on the Diamond Jubilee 75th Independence Day.", url: "https://propakistani.pk/2023/01/26/armed-forces-to-get-special-awards-on-75th-independence-day/" },
  { id: "long-service", name: "10 Years Long Service Medal", issuer: "Pakistan Navy", date: "01 Jan 2022", detail: "Honored for a decade of continuous and exemplary service.", url: "https://en.wikipedia.org/wiki/Awards_and_decorations_of_the_Pakistan_Armed_Forces" },
  { id: "tamgha-e-azm", name: "Tamgha-e-Azm", issuer: "Pakistan Navy / Ministry of Defence", date: "23 Mar 2018", detail: "Military Service Medal recognizing exceptional bravery, commitment, and service in operations against militancy and terrorism.", url: "https://en.wikipedia.org/wiki/Awards_and_decorations_of_the_Pakistan_Armed_Forces" },
];
