"""create nut.menus table

Revision ID: 0aafe7203db9
Revises: fb2fe377459a
Create Date: 2023-05-25 18:13:15.772930

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0aafe7203db9'
down_revision = 'fb2fe377459a'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'menus',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('code', sa.String(63), nullable=False),
        sa.Column('location', sa.String(31), nullable=False),
        sa.Column('left', sa.Integer, nullable=False),
        sa.Column('right', sa.Integer, nullable=False),
        sa.Column('deleted_at', sa.DateTime),
        sa.Column('version', sa.Integer, nullable=False, server_default='0'),
        sa.Column('updated_at', sa.DateTime, nullable=False),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_menus_location_code', 'menus',
                    ['location', 'code'], unique=True)
    op.create_index('idx_menus_location', 'menus', ['location'])
    op.create_index('idx_menus_code', 'menus', ['code'])


def downgrade() -> None:
    op.drop_table('menus')
