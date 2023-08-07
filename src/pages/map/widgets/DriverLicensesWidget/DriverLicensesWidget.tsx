import { ReactNode, memo, useCallback, useMemo } from 'react';
import cn from 'classnames';

import useFm from '@/hooks/useFm';

import { CheckboxUi } from '@/uikit/Checkbox';
import { Box } from '@/uikit/Box';

import { CheckboxThemes } from '@/uikit/Checkbox/types';
import { useDriverLicensesOption } from '@/hooks/useDriverLicensesOption';
import { DriverLicensesColors } from '@/data/driverLicensesRequirements/colors';
import { DriverLicenseConventions } from '@/data/driverLicensesRequirements/types';
import { driverLicensesMessages as messages } from './messages';

import classes from './DriverLicensesWidget.module.scss';

export interface DriverLicensesWidgetProps {
  className?: string;
  children?: ReactNode;
}

export const DriverLicensesWidget = memo<DriverLicensesWidgetProps>(({ className }) => {
  const { fm } = useFm();
  const [driverLicensesState, setDriverLicensesActive] = useDriverLicensesOption();
  // const [driverLicenseRequirements, setDriverLicenseRequirements] = useSettingDriverLicensesRequirements();

  const onClickCheckbox = useCallback((checked: boolean) => {
    setDriverLicensesActive(checked ? 'true' : 'false');
  }, [setDriverLicensesActive]);

  const genevaConventionBlockStyles = useMemo(() => ({
    backgroundColor: DriverLicensesColors[DriverLicenseConventions.Geneva],
  }), []);

  const viennaConventionBlockStyles = useMemo(() => ({
    backgroundColor: DriverLicensesColors[DriverLicenseConventions.Vienna],
  }), []);

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
            <div style={viennaConventionBlockStyles} className={cn(classes.conventionColor, classes.vienna)} />
            <Box direction="column">
              <div className={classes.conventionTitle}>
                {fm(messages.viennaConventionTitle)}
              </div>
              <div className={classes.conventionDescription}>
                {fm(messages.viennaConventionDescription)}
              </div>
            </Box>
          </Box>
          <Box className={classes.conventionBlock} alignItems="center">
            <div style={genevaConventionBlockStyles} className={cn(classes.conventionColor, classes.geneva)} />
            <Box direction="column">
              <div className={classes.conventionTitle}>
                {fm(messages.genevaConventionTitle)}
              </div>
              <div className={classes.conventionDescription}>
                {fm(messages.genevaConventionDescription)}
              </div>
            </Box>
          </Box>
        </>
      )}
    </div>
  );
});
