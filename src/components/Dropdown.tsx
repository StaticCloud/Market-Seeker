import { JSX } from "react";
import DropdownProps from "../types/DropdownProps";

function Dropdown({ keywords, selectedKeyword, setKeyword }: DropdownProps): JSX.Element {
    return (
        <select value={selectedKeyword} onChange={(e) => setKeyword(e.target.value)}>
            <option value={"Select"}>Select A Keyword</option>
            {keywords.sort().map((keyword) => 
                <option value={keyword} key={keyword}>
                    {keyword}
                </option>
            )}
        </select>
    );
}

export default Dropdown;