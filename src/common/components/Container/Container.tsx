interface IProps {
    children: React.ReactNode;
    className?: string;
}

export const Container = ({ children, className }: IProps) => (
    <div className={`md:p-9 ${className}`}>{children}</div>
);