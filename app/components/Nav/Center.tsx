import Icon from "../Icon/Icon";
import Button from "../Button/Button";

const Center = () => {
    return (
        <div className="w-full px-6 py-8 md:max-w-xl xl:max-w-5xl flex-none border-x border-grey-60">
        <div className="flex justify-between">
          <h1 className="h1">Contacts</h1>
          <div className="flex items-center">
            <Button iconOnly className="bg-grey-100">
              <Icon name="settings" />
            </Button>

            <Button iconOnly className="bg-grey-100">
              <div className="icon">
                <img
                  src="imgs/profile.png"
                  className="rounded-full border-[1.5px] "
                  alt=""
                ></img>
              </div>
            </Button>

            <div className="ml-2 md:ml-6">
              <Button round>
                <Icon name="add" className="mr-2" />
                <span className="hidden md:block"> Add new </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Center;