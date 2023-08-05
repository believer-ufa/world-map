import { ReactNode, memo, useCallback } from 'react';
import cn from 'classnames';

import useFm from '@/hooks/useFm';
import { russiaDriverLicensesRequirements } from '@/data/driverLicensesRequirements/russia';
import { useSettingDriverLicensesRequirements } from '@/hooks/useSettingDriverLicensesRequirements';

import { CheckboxUi } from '@/uikit/Checkbox';
import { Box } from '@/uikit/Box';

import { CheckboxThemes } from '@/uikit/Checkbox/types';
import { useDrawer } from '@/hooks/useDrawer';
import { driverLicensesMessages as messages } from './messages';

import classes from './DriverLicensesWidget.module.scss';

export interface DriverLicensesWidgetProps {
  className?: string;
  children?: ReactNode;
}

export const DriverLicensesWidget = memo<DriverLicensesWidgetProps>(({ className }) => {
  const { fm } = useFm();
  const [driverLicensesState, setDriverLicensesActive] = useDrawer({ queryParamName: 'driverLicenses', defaultValue: 'false' });
  const [driverLicenseRequirements, setDriverLicenseRequirements] = useSettingDriverLicensesRequirements();

  console.log({ russiaDriverLicensesRequirements, driverLicenseRequirements });

  const onClickCheckbox = useCallback((checked: boolean) => {
    setDriverLicensesActive(checked ? 'true' : 'false');
  }, [setDriverLicensesActive]);

  return (
    <div className={cn(classes.control, className, 'leaflet-control leaflet-bar')}>
      <CheckboxUi
        checked={driverLicensesState === 'true'}
        label={fm(messages.title)}
        onChange={onClickCheckbox}
        theme={CheckboxThemes.dark}
      />
      {driverLicensesState === 'true' && (
        <>
          <Box className={classes.conventionBlock} alignItems="center">
            <div className={cn(classes.conventionColor, classes.geneva)} />
            <div className={classes.conventionTitle}>
              {fm(messages.genevaConvention)}
            </div>
          </Box>
          <Box className={classes.conventionBlock} alignItems="center">
            <div className={cn(classes.conventionColor, classes.vienna)} />
            <div className={classes.conventionTitle}>
              {fm(messages.viennaConvention)}
            </div>
          </Box>
        </>
      )}
    </div>
  );
});
