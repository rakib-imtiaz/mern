import { TbBeach, TbMountain } from 'react-icons/tb'
import {
  GiBoatFishing,
  GiCastle,
  GiMosqueDome,
  GiTeahouse,
  GiForestCamp,
  GiVillage,
} from 'react-icons/gi'
import { FaHotel } from 'react-icons/fa'
import { BiSolidResort } from 'react-icons/bi'

export const categories = [
  {
    label: 'Cox\'s Bazar',
    icon: TbBeach,
    description: 'World\'s longest natural sea beach!',
  },
  {
    label: 'Sylhet',
    icon: TbMountain,
    description: 'Tea gardens and hills!',
  },
  {
    label: 'Sundarbans',
    icon: GiBoatFishing,
    description: 'World\'s largest mangrove forest!',
  },
  {
    label: 'Heritage',
    icon: GiCastle,
    description: 'Historical sites and architecture!',
  },
  {
    label: 'Islamic',
    icon: GiMosqueDome,
    description: 'Beautiful mosques and Islamic architecture!',
  },
  {
    label: 'Tea Resort',
    icon: GiTeahouse,
    description: 'Luxurious tea garden resorts!',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'Outdoor camping experiences!',
  },
  {
    label: 'Village',
    icon: GiVillage,
    description: 'Traditional village stays!',
  },
  {
    label: 'Hotels',
    icon: FaHotel,
    description: 'Modern city hotels!',
  },
  {
    label: 'Resorts',
    icon: BiSolidResort,
    description: 'Luxury resorts and spas!',
  },
]
