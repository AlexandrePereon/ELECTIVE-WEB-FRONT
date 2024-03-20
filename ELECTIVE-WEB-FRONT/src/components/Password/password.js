import React,{useState} from "react";



const Password = ({handlesetIsPasswordValid}) => {

    const [passwordValue,setPasswordValue] = useState(null);
    const [isPasswordVisible,setIsPasswordVisible] = useState(false);

    const conditionTab = [{
        label : "1 maj",
        isCondionValid :/(?=.*[A-Z])/.test(passwordValue)
    },
    {
        label : "1 caractère spécial",
        isCondionValid :/(?=.*[!@#$%^&*()])/.test(passwordValue)
    },
    {
        label : "10 valeurs",
        isCondionValid :/.{10}/.test(passwordValue)
    },
    {
        label : "1 numéro",
        isCondionValid :/(?=.*[0-9])/.test(passwordValue)
    }]

    const conditionList = conditionTab.map((condition,index) => {
        return(
            <li key={index}>{condition.isCondionValid?"V":"X"} {condition.label}</li>
        );
    })

    if( conditionTab[0].isCondionValid &&
        conditionTab[1].isCondionValid &&
        conditionTab[2].isCondionValid &&
        conditionTab[3].isCondionValid
    ) {
        handlesetIsPasswordValid(true) 
    } else {
        handlesetIsPasswordValid(false) 
    }

    return(
              <>
                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 ">
                        Password
                        </label>
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <span className="label-text mr-2">Afficher</span>
                                <input type="checkbox" className="checkbox checkbox-success" onClick={() => setIsPasswordVisible(!isPasswordVisible)}/>
                            </label>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input
                        id="password"
                        name="password"
                        type={isPasswordVisible?"text":"password"}
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setPasswordValue(e.target.value)}
                        />
                    </div>
                </div>
                <ul>
                    {conditionList}
                </ul>
              </>
            )
}

export default Password;