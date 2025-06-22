
import { 
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator
  } from "@/components/ui/dropdown-menu";
import { BsCaretDownFill } from "react-icons/bs";



import Logout from "./Logout";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import user from "../../src/assets/user.webp"


const DropDownUser = () => {



    return (
        <DropdownMenu>
            
            <DropdownMenuTrigger className="flex items-center    focus:outline-none  ">
                <div>

                    <img className="w-10 h-10 rounded-full object-cover mr-2" src={user }
                    />
                <BsCaretDownFill size={12} className=" flex ml-3" />
                </div>

                {/* <img src={userFetchigData?.user?.imageFile}/> */}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
             
                <DropdownMenuLabel >
                  
                
                    
                    </DropdownMenuLabel>
                <DropdownMenuSeparator />
                   

                <DropdownMenuItem>
                 
                </DropdownMenuItem>
            

                <DropdownMenuItem><Logout /></DropdownMenuItem>
           
            </DropdownMenuContent>
        </DropdownMenu>

    )
};
export default DropDownUser;