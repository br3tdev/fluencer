import { OrganizationList } from "@clerk/nextjs";

export interface ICreateOrganizationListProps {}

export default function CreateOrganizationList(
  props: ICreateOrganizationListProps,
) {
  return (
    <OrganizationList
      hidePersonal
      afterCreateOrganizationUrl={"/profile/:id"}
      afterSelectOrganizationUrl={"/profile/:id"}
    />
  );
}
