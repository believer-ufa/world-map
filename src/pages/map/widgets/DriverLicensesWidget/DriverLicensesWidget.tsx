import { ReactNode, memo } from 'react';
import cn from 'classnames';

import useFm from '@/hooks/useFm';
import { russiaDriverLicensesRequirements } from '@/data/driverLicensesRequirements/russia';
import { driverLicensesMessages } from './messages';

import classes from './DriverLicensesWidget.module.scss';

export interface DriverLicensesWidgetProps {
  className?: string;
  children?: ReactNode;
}

export const DriverLicensesWidget = memo<DriverLicensesWidgetProps>(({ className }) => {
  const { fm } = useFm();

  console.log({ russiaDriverLicensesRequirements });

  return (
    <div className={cn(classes.control, className, 'leaflet-control leaflet-bar')}>
      {fm(driverLicensesMessages.title)}
    </div>
  );
});
