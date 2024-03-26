interface IProps {
    children: React.ReactNode;
    className?: string;
}

export const Container = ({ children, className }: IProps) => (
    <div className={`p-9 ${className}`}>{children}</div>
);