import { Label } from "@/components/ui/label";
import { userTagsList } from "@/constants/tags-list";
import { useFormStepper } from "@/hooks/Form-stepper/use-form-stepper";
import { bioValidationFn } from "@/lib/form-validation";
import { useEffect } from "react";
import FormTextarea from "./_components/form-textarea";
import FrontMatter from "./_components/front-matter";
import { UserProfileTags } from "./_components/user-profile-tags";

export interface IBioAndTagsFieldsContainerProps {}

export default function BioAndTagsFieldsContainer(
  props: IBioAndTagsFieldsContainerProps,
) {
  const {
    userBio,
    setUserBio,
    setBioErrors,
    bioErrors,
    bioTouched,
    setBioTouched,
    tagOptions,
    onTagChange,
  } = useFormStepper((state) => state);

  useEffect(() => {
    setBioErrors(bioValidationFn(userBio));
  }, [userBio.bio]);

  return (
    <>
      <div className="mb-8 space-y-4">
        <FrontMatter
          title="Bio"
          description="Please provide a short narrative about your brand"
        />
      </div>

      <div className="space-y-4">
        <FormTextarea
          name="bio"
          label="bio"
          required
          value={userBio.bio}
          placeholder="Tell us a little bit about yourself"
          description="You can @mention other users and organizations."
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setUserBio({ [e.target.name]: e.target.value })
          }
          onBlur={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setBioTouched({ [e.target.name]: true })
          }
          error={bioTouched.bio && bioErrors.bio ? bioErrors.bio : ""}
        />
        <div className="space-y-2">
          <Label
            htmlFor={"bio"}
            className="text-sm font-semibold text-neutral-700"
          >
            Add tags that match your bio
          </Label>
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {userTagsList.map(({ name, value, ...others }) => {
              return (
                <li key={name}>
                  <UserProfileTags
                    name={name}
                    value={value}
                    isChecked={tagOptions.includes(value)}
                    onCheckChange={(checked) =>
                      onTagChange(value, checked as boolean)
                    }
                    {...others}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
