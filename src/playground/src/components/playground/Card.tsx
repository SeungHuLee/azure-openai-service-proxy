import {
  Body1,
  CardHeader as FluentUICardHeader,
  CardHeaderProps,
  CardProps,
  Card as FluentUICard,
  makeStyles,
  mergeClasses,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  card: {
    marginTop: "10px",
    marginRight: "10px",
    marginBottom: "10px",
    marginLeft: "10px",
  },
  header: {
    height: "10vh",
    alignItems: "start",
  },
  maxWidth: {
    maxWidth: "100%",
  },
  text: {
    fontSize: "large",
  },
});

export const CardHeader = ({
  header,
  ...rest
}: { header: string } & CardHeaderProps) => {
  const styles = useStyles();
  return (
    <FluentUICardHeader
      {...rest}
      className={styles.header}
      header={
        <div className={styles.maxWidth}>
          <Body1 className={styles.text}>
            <h2>{header}</h2>
          </Body1>
        </div>
      }
    />
  );
};

export const Card = ({
  children,
  className,
  header,
  ...rest
}: CardProps & { header?: string }) => {
  const styles = useStyles();

  return (
    <FluentUICard className={mergeClasses(styles.card, className)} {...rest}>
      {header && <CardHeader className={styles.header} header={header} />}
      {children}
    </FluentUICard>
  );
};
