import { ReactNode, useState, memo, useCallback } from 'react';
import cn from 'classnames';

import useFm from '@/hooks/useFm';
import { russiaDriverLicensesRequirements } from '@/data/driverLicensesRequirements/russia';
import { useSettingDriverLicensesRequirements } from '@/hooks/useSettingDriverLicensesRequirements';

import { CheckboxUi } from '@/uikit/Checkbox';

import { CheckboxThemes } from '@/uikit/Checkbox/types';
import { useDrawer } from '@/hooks/useDrawer';
import { driverLicensesMessages } from './messages';

import classes from './DriverLicensesWidget.module.scss';

export interface DriverLicensesWidgetProps {
  className?: string;
  children?: ReactNode;
}

export const DriverLicensesWidget = memo<DriverLicensesWidgetProps>(({ className }) => {
  const { fm } = useFm();
  const [driverLicensesActive, setDriverLicensesActive] = useDrawer({ paramName: 'driverLicenses', defaultValue: 'false' });
  const [driverLicenseRequirements, setDriverLicenseRequirements] = useSettingDriverLicensesRequirements();

  console.log({ russiaDriverLicensesRequirements, driverLicenseRequirements });

  const onClickCheckbox = useCallback((checked: boolean) => {
    setDriverLicensesActive(checked ? 'true' : 'false');
  }, [setDriverLicensesActive]);

  return (
    <div className={cn(classes.control, className, 'leaflet-control leaflet-bar')}>
      <CheckboxUi
        checked={driverLicensesActive === 'true'}
        label={fm(driverLicensesMessages.title)}
        onChange={onClickCheckbox}
        theme={CheckboxThemes.dark}
      />
    </div>
  );
});
