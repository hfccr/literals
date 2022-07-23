import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VerifiedIcon from '@mui/icons-material/Verified';
import YardIcon from '@mui/icons-material/Yard';
import TableChartIcon from '@mui/icons-material/TableChart';
import { categories } from './../../tags';

export function CategoryIcon({ category }) {
  switch (category) {
    case categories.finance:
      return <PriceCheckIcon />;
    case categories.gaming:
      return <VideogameAssetIcon />;
    case categories.poap:
      return <WorkspacePremiumIcon />;
    case categories.human:
      return <VerifiedIcon />;
    case categories.lens:
      return <YardIcon />;
    case categories.tableland:
      return <TableChartIcon />;
    default:
      return null;
  }
}
