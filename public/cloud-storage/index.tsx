import { SVGProps } from "react";
import AzureBlobStorageLogo from "./azureBlobStorage.svg";
import AzureCosmosLogo from "./azureCosmosDB.svg";
import AzureDataLakeLogo from "./azureDataLake.svg";
import MongoDbLogo from "./mongoDb.svg";
import MySqlLogo from "./mysql.svg";

type prop = SVGProps<SVGSVGElement>;

export const AzureBlobStorage = (props: prop) => {
  return <AzureBlobStorageLogo {...props} />;
};
export const AzureCosmos = (props: prop) => {
  return <AzureCosmosLogo {...props} />;
};
export const AzureDataLake = (props: prop) => {
  return <AzureDataLakeLogo {...props} />;
};

export const MongoDb = (props: prop) => {
  return <MongoDbLogo {...props} />;
};

export const MySql = (props: prop) => {
  return <MySqlLogo {...props} />;
};
