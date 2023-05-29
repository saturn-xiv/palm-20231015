"""create nut.shorter-links table

Revision ID: 1fa99a582173
Revises: 0bba212f64f5
Create Date: 2023-05-25 14:44:11.463237

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1fa99a582173'
down_revision = '0bba212f64f5'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'shorter_links',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('url', sa.String(length=255), nullable=False, unique=True),
        sa.Column('summary', sa.String(length=255),
                  nullable=False, server_default=''),
        sa.Column('version', sa.Integer, nullable=False, server_default='0'),
        sa.Column('updated_at', sa.DateTime, nullable=False),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )


def downgrade() -> None:
    op.drop_table('shorter_links')
