import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import Center from "./Center"

const Nav = () => {
  return (
    <>
      {/* first row of ui start */}
      <div className="h-16 md:h-24  flex justify-between items-center md:max-w-xl xl:max-w-5xl border-x border-grey-60 mx-auto">
        <div className="md:hidden ml-4 h-full flex justify-end items-center">
          <Button iconOnly className="bg-grey-100">
            <Icon name="back" />
          </Button>
        </div>

        <div className="md:hidden mr-6 h-full flex justify-start items-center">
          <Button iconOnly className="bg-grey-100">
            <Icon name="sun" />
          </Button>
        </div>
      </div>
      {/* first row of ui end */}

      {/* normal nav */}
      <nav className="sticky top-0 bg-grey-100 border-y border-grey-60 flex w-full ">
        {/* left side */}
        <div className="grow  hidden md:block">
          <div className="pr-4 h-full flex justify-end items-center">
            <Button iconOnly className="bg-grey-100">
              <Icon name="back" />
            </Button>
          </div>
        </div>
        {/* center */}
        <Center/>
        {/* right side */}
        <div className="grow hidden md:block">
          <div className="pl-4 h-full flex justify-start items-center">
            <Button iconOnly className="bg-grey-100">
              <Icon name="sun" />
            </Button>
          </div>
        </div>
      </nav>
      {/* normal nav end*/}
    </>
  );
};

export default Nav;
