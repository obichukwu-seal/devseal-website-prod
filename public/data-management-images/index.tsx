import Image, { ImageProps } from 'next/image'
import BusinessRequirement from "./business-requirements-workshops.jpg"
import DataArchitecture from "./data-architecture-modelling.jpg"
import DataGovernance from "./data-governance-quality.jpg"
import DataManagement from './data-management.jpg'
import DataDomain from './data-domain-data-product-delivery.jpg'
import DataMesh from './data-mesh-data-lake-enterprise-data-warehouse.jpg'
import DataSecurity from "./data-security-sovereignty-privacy.jpg"
import DataStrategy from './data-strategy-advisory-consultation.jpg'
import MetaData from './metadata-management.jpg'
import DataManagementHero from "./data_management.jpeg"

type NewImageProp = Omit<ImageProps, "src" | "placeholder" | "alt">;


export const DataMangementHeroImage = (props: NewImageProp) => {
    return <Image src={DataManagementHero} alt="Data management hero image" placeholder={"blur"} {...props} />
}
export const BusinessRequirementImage = (props: NewImageProp) => {
    return <Image src={BusinessRequirement} alt="Business requirement" placeholder={"blur"} {...props} />
}

export const DataArchitectureImage = (props: NewImageProp) => {
    return <Image src={DataArchitecture} alt="Data architecture" placeholder={"blur"} {...props} />
}

export const DataGovernanceImage = (props: NewImageProp) => {
    return <Image src={DataGovernance} alt="Data Governance" placeholder={"blur"} {...props} />
}

export const DataMangaementImage = (props: NewImageProp) => {
    return <Image src={DataManagement} alt="Data Management" placeholder={"blur"} {...props} />
}

export const DataDomainImage = (props: NewImageProp) => {
    return <Image src={DataDomain} alt="Data Domain" placeholder={"blur"} {...props} />
}

export const DataMeshImage = (props: NewImageProp) => {
    return <Image src={DataMesh} alt="Data Domain" placeholder={"blur"} {...props} />
}

export const DataSecurityImage = (props: NewImageProp) => {
    return <Image src={DataSecurity} alt='Data security' placeholder={"blur"} {...props} />
}

export const DataStrategyImage = (props: NewImageProp) => {
    return <Image src={DataStrategy} alt='Data strategy' placeholder={'blur'} {...props} />
}

export const MetaDataImage = (props: NewImageProp) => {
    return <Image src={MetaData} alt='meta data' placeholder={'blur'} {...props} /> 
}

export {MetaData, DataArchitecture, DataStrategy,BusinessRequirement, DataMesh, DataDomain,DataGovernance,DataSecurity,DataManagement}