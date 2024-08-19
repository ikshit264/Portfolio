import RecentDoc from '@/../public/Recent_Documents.png';
import Search from '@/../public/Search.png';
import Run from '@/../public/Run.png';
import MSN from '@/../public/MSN.png';
// import Paint from '@/../public/Paint.png';
// import Minesweeper from '@/../public/Minesweeper.png';
// import Windows_Media from '@/../public/Windows_Media.png';
// import Music_App from '@/../public/Music_App.png';
import MyDoc from '@/../public/MyDocuments.png';
import My_Pictures from '@/../public/My_Pictures.png';
import My_Music from '@/../public/My_Music.png';
import My_Computer from '@/../public/My_Computer.png';
import Control_Panel from '@/../public/ControlPanel.png';
import Default_Programs from '@/../public/Default_Programs.png';
import Network_Connections from '@/../public/Network_Connections.png';
import Printer from '@/../public/Printer.png';
import Help_and_Support from '@/../public/Help_and_Support.png';
import { StaticImageData } from 'next/image';

export interface StartMenuProps {
    title: string;
    IconClose ?: StaticImageData;
    IconOpen ?: StaticImageData;
    Component ?: React.ComponentType<any>;
    description ?: String;
    list ?: StartMenuProps[];
    Tab : 'SimpleTab' | 'ErrorTab' | 'CMD';
}
export const ErrorData: StartMenuProps[] = [
    {
        title: 'My Documents',
        IconClose: MyDoc,
        Tab : 'ErrorTab'
    },
    {
        title: 'My Recent Documents',
        IconClose: RecentDoc,
        Tab : 'ErrorTab',
        list: [{ title: '(Empty)', Tab : 'ErrorTab'}],
    },
    {
        title: 'My Picture',
        IconClose: My_Pictures,
        Tab : 'ErrorTab'

    },
    {
        title: 'My Music',
        IconClose: My_Music,
        Tab : 'ErrorTab'

    },
    {
        title: 'My Computer',
        IconClose: My_Computer,
        Tab : 'ErrorTab'

    },
    {
        title: 'none',
        IconClose: My_Computer,
        Tab : 'ErrorTab'

    },
    {
        title: 'Control Panel',
        IconClose: Control_Panel,
        Tab : 'ErrorTab'

    },
    {
        title: 'Set Program Access and Defaults',
        IconClose: Default_Programs,
        Tab : 'ErrorTab'

    },
    {
        title: 'Connect To',
        IconClose: Network_Connections,
        Tab : 'ErrorTab',
        list: [
            {
                title: 'MSN',
                IconClose: MSN,
                Tab : 'ErrorTab',

            },
            {
                title: 'Show all Connections',
                IconClose: Network_Connections,
                Tab : 'ErrorTab',

            }
        ]
    },
    {
        title: 'Printers and Faxes',
        IconClose: Printer,
        Tab : 'ErrorTab',
    },
    {
        title: 'none',
        IconClose: Printer,
        Tab : 'ErrorTab',
    },
    {
        title: 'Help and Support',
        IconClose: Help_and_Support,
        Tab : 'ErrorTab',
    },
    {
        title: 'Search',
        IconClose: Search,
        Tab : 'ErrorTab',
    },
    {
        title: 'Run...',
        IconClose: Run,
        Tab : 'ErrorTab',
    },
];
